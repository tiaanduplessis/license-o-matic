const licenseOMatic = require('./')

test('should be defined', () => {
  expect(licenseOMatic).toBeDefined()
  expect(typeof licenseOMatic).toBe('object')
})

test('should get license identifier', () => {
  const identifiers = licenseOMatic.getIdentifiers()
  expect(Array.isArray(identifiers)).toBeTruthy()
})

test('should create MIT license', () => {
  const mit = licenseOMatic.getLicense('mit')
  const name = 'foooper'
  const licenseStr = mit({copyrightHolder: name})
  expect(licenseStr.indexOf(name) !== -1).toBeTruthy()
})

test('should throw if license does not exist', () => {
  expect(() => licenseOMatic.getLicense('fooopper')).toThrow()
})
