import users from './users'
import { ADD_USER } from '../constants/actionTypes'

describe('users reducer', () => {
  it('should return the initial state, empty', () => {
    expect(users(undefined, {})).toEqual([])
  })

  it('should handle ADD_USEr and store every user', () => {
    expect(users([], { type: ADD_USER, name: 'Tony' })).toEqual([
      { name: 'Tony' }
    ])

    expect(users([{ name: 'Tony' }], { type: ADD_USER, name: 'Mark' })).toEqual(
      [{ name: 'Tony' }, { name: 'Mark' }]
    )
  })
})
