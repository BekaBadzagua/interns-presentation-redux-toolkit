import { useDispatch } from 'react-redux';
import {
  deleteContact,
  removeContactFromBoard,
} from '../store/slices/contactsSlice';

function Card(props) {
  const dispatch = useDispatch();

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
          onClick={() => dispatch(deleteContact(props.contact.id))}
          className='delete'
        >
          Delete
        </button>
        <button
          onClick={() => dispatch(removeContactFromBoard(props.contact.id))}
          className='close'
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Card;
