const licenses = {
  'mit': require('./licenses/mit'),
  'apache-2.0': require('./licenses/apache-2.0'),
  'gpl-3.0-only': require('./licenses/gpl-3.0-only'),
  'mpl-2.0': require('./licenses/mpl-2.0'),
  'unlicense': require('./licenses/unlicense'),
  'lgpl-3.0-only': require('./licenses/lgpl-3.0-only')
}

module.exports = {
  getIdentifiers () {
    return Object.keys(licenses)
  },

  getLicense (license = 'mit') {
    license = license.toString().toLowerCase()

    if (!licenses[license]) {
      throw new Error('License does not exist. Please create PR to add (https://github.com/tiaanduplessis/license-o-matic/pulls)')
    }

    return licenses[license]
  }
}
