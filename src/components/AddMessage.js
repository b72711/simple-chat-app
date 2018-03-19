import React from 'react'

const AddMessage = ({ addMessage }) => {
  let input
  return (
    <section id="new-message">
      <input
        type="text"
        onKeyPress={e => {
          if (e.key === 'Enter') {
            addMessage(input.value, 'Me')
            input.value = ''
          }
        }}
        ref={node => {
          input = node
        }}
      />
    </section>
  )
}

export default AddMessage
