import messages from './messages'
import { ADD_MESSAGE } from '../constants/actionTypes'

describe('messages reducer', () => {
  it('should return the initial state, empty', () => {
    expect(messages(undefined, {})).toEqual([])
  })

  it('should handle ADD_MESSAGE and store every message', () => {
    expect(
      messages([], {
        type: ADD_MESSAGE,
        message: 'Hi',
        author: 'Me'
      })
    ).toEqual([{ message: 'Hi', author: 'Me' }])

    expect(
      messages([{ message: 'Hi', author: 'Me' }], {
        type: ADD_MESSAGE,
        message: 'Hi again',
        author: 'Me again'
      })
    ).toEqual([
      { message: 'Hi', author: 'Me' },
      { message: 'Hi again', author: 'Me again' }
    ])
  })
})
