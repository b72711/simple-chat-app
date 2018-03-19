import { connect } from 'react-redux'
import AddMessage from '../components/AddMessage'
import { addMessage } from '../actions/actions'

const mapDispatchToProps = dispatch => ({
  addMessage: (message, author) => dispatch(addMessage(message, author))
})

export default connect(undefined, mapDispatchToProps)(AddMessage)
