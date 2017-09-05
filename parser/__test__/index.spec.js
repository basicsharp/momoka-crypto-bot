const parser = require('..')
const REGEX = require('../regex')
const ACTIONS = require('../actions')

describe('Language parser test', function () {
  it('should sleep on โมโมกะ ไปนอน', () => {
    const action = parser({text: 'โมโมกะ ไปนอน'})
    expect(action).toEqual({
      type: ACTIONS.SLEEP
    })
  })
  it('should parse ขอราคา omg จาก bx correctly', () => {
    const action = parser({
      user: { userId: 'Uc248783e15560cde84441aa1ee8c19ad',
        displayName: '! Rungsikorn🌀',
        pictureUrl: 'http://dl.profile.line-cdn.net/0hi5Mfq0q8NhpwHxkPeMVJTUxaOHcHMTBSCH15e1AeP3pdLHVIRXApLwFIPyoKLHBETixxfVIfPyxc',
        statusMessage: '(tired)' },
      text: 'ขอราคา omg จาก bx'
    })
    expect(action).toEqual({
      type: ACTIONS.GET_PRICE,
      payload: {
        currency: 'omg',
        from: 'bx'
      }
    })
  })
})
