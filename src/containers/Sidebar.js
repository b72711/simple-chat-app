import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar'

export default connect(state => ({ users: state.users }))(Sidebar)
