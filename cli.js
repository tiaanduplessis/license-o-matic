#! /usr/bin/env node

const fs = require('fs')
const path = require('path')

const args = require('get-them-args')()

const licenseOMatic = require('./index')

const fileName = args.fileName || 'LICENSE'
const licenseName = args.license || 'mit'

if (args.unknown && args.unknown.length && args.unknown[0] === 'ls') {
    console.log(`\n- ${licenseOMatic.getIdentifiers().join('\n- ')}\n`)
} else {
    const license = licenseOMatic.getLicense(licenseName)
    fs.writeFileSync(path.join(process.cwd(), fileName), license(args))
    console.log('License created')
}

