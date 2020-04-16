const licenses = {
  mit: require('./licenses/mit'),
  'apache-2.0': require('./licenses/apache-2.0'),
  'gpl-3.0-only': require('./licenses/gpl-3.0-only'),
  'mpl-2.0': require('./licenses/mpl-2.0'),
  unlicense: require('./licenses/unlicense'),
  'lgpl-3.0-only': require('./licenses/lgpl-3.0-only'),

  // new added @NikhilNamal17
  'abstyles-license': require('./licenses/abstyles-license.js'),
  'academic-free-license-v3': require('./licenses/academic-free-license-v3.0.js'),
  'apple-public-source-license-2.0': require('./licenses/apple-public-source-license-2.0'),
  'attribution-assurance-license': require('./licenses/attribution-assurance-license'),
  'bsd-zero-clause-license': require('./licenses/bsd-zero-clause-license'),
  'eclipse-public-license-version-2.0': require('./licenses/eclipse-public-license-version-2.0'),
  'educational-community-license-v-2.0(ecl-2.0).js': require('./licenses/educational-community-license-v-2.0(ecl-2.0)'),
  'mozilla-public-license-2.0(mpl-2.0)': require('./licenses/mozilla-public-license-2.0(mpl-2.0)'),
  'open-software-license-3.0(osl-3.0)': require('./licenses/open-software-license-3.0(osl-3.0)'),
  'sun-public-license-version-1.0(spl-1.0)': require('./licenses/sun-public-license-version-1.0(spl-1.0)')
}

module.exports = {
  getIdentifiers () {
    return Object.keys(licenses)
  },

  getLicense (license = 'mit') {
    license = license.toString().toLowerCase()

    if (!licenses[license]) {
      throw new Error(
        'License does not exist. Please create PR to add (https://github.com/tiaanduplessis/license-o-matic/pulls)'
      )
    }

    return licenses[license]
  }
}
