/* eslint-disable no-console,prefer-template */
const childProcess = require('child_process')
const findup = require('findup-sync')
const fs = require('fs')
const inquirer = require('inquirer')
const mkdirp = require('mkdirp').sync
const path = require('path')

function addToLocalRc(callback) {
  const commonsDefault = path.join(__dirname, '..', '..', 'commons')
  const rcPath = path.join(__dirname, '..', '.localrc')

  inquirer.prompt([{
    type: 'input',
    name: 'commons',
    message: 'Where is the commons library located:',
    default: path.resolve(commonsDefault),
  }], answers => {
    fs.writeFileSync(rcPath, JSON.stringify(answers, undefined, 2))
    callback(undefined, rcPath)
  })
}

function getcommonsPath(callback) {
  const rcPath = findup('.localrc')

  if (rcPath) {
    readConfig(undefined, rcPath)
  } else {
    addToLocalRc(readConfig)
  }

  function readConfig(err, rc) {
    const local = JSON.parse(fs.readFileSync(rc))
    if (local.commons) {
      callback(undefined, local.commons)
    } else {
      addToLocalRc(callback)
    }
  }
}

function npmRunScript(commands) {
  getcommonsPath((err, commons) => {
    childProcess.execSync(`npm run --color=always ${commands.join(' ')}`, {
      cwd: commons,
      stdio: 'inherit',
    })

    const commonsModulePath = path.join(
      path.dirname(__dirname),
      'node_modules',
      '@company-name',
      'commons'
    )
    if (!fs.existsSync(commonsModulePath)) {
      childProcess.execSync(`npm link ${commons}`, {
        cwd: path.dirname(__dirname),
        stdio: 'inherit',
      })
    }
  })
}

module.exports.addToLocalRc = addToLocalRc
module.exports.getcommonsPath = getcommonsPath
module.exports.npmRunScript = npmRunScript

if (require.main === module) {
  npmRunScript(process.argv.slice(2))
}