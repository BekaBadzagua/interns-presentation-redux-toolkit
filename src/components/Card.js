import { connect } from 'react-redux';
import * as actions from '../store/actions/contactsAction';

function Card(props) {
  return (
    <div className='card'>
      <h3>{props.contact.name}</h3>
      <span className='phone'>phone: {props.contact.phone}</span>
      <div className='buttons'>
        <button
          className='call'
          onClick={() => alert('Calling to - ' + props.contact.name)}
        >
          Call
        </button>
        <button
          onClick={() => props.deleteContact(props.contact.id)}
          className='delete'
        >
          Delete
        </button>
        <button
          onClick={() => props.removeContactFromBoard(props.contact.id)}
          className='close'
        >
          Close
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(actions.deleteContact(id)),
    removeContactFromBoard: (id) =>
      dispatch(actions.removeContactFromBoard(id)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
