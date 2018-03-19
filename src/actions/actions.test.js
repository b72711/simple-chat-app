import { addMessage, addUser } from './actions'
import { ADD_MESSAGE, ADD_USER } from '../constants/actionTypes'

describe('adding a message', () => {
  it('should create an action to add a message with id 0', () => {
    const action = {
      type: ADD_MESSAGE,
      message: 'test message',
      author: 'Me',
      id: 0
    }
    expect(addMessage('test message', 'Me')).toEqual(action)
  })
})

describe('adding a second message', () => {
  it('should create an action to add a message with id 1', () => {
    const action = {
      type: ADD_MESSAGE,
      message: 'test message',
      author: 'Me',
      id: 1
    }
    expect(addMessage('test message', 'Me')).toEqual(action)
  })
})

describe('adding a second user', () => {
  it('should create an action to add a user with id 0', () => {
    const user = 'Mark'
    const action = {
      type: ADD_USER,
      name: user,
      id: 0
    }
    expect(addUser(user)).toEqual(action)
  })
})

describe('adding a second user', () => {
  it('should create an action to add a message with id 1', () => {
    const user = 'Tony'
    const action = {
      type: ADD_USER,
      name: user,
      id: 1
    }
    expect(addUser(user)).toEqual(action)
  })
})
