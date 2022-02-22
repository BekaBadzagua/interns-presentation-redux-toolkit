import { useState } from 'react';
import AddContact from './modals/AddContact';
import { useSelector, useDispatch } from 'react-redux';
import { addContactOnBoard } from '../store/slices/contactsSlice';

function ContactList() {
  const [showModal, setShowModal] = useState(false);

  const contactsList = useSelector((state) => state.contacts.list);
  const dispatch = useDispatch();

  const contacts = contactsList.map((contact) => {
    return (
      <li
        onClick={() => dispatch(addContactOnBoard(contact.id))}
        key={contact.id}
      >
        {contact.name}
      </li>
    );
  });

  return (
    <div className='list'>
      <div>
        <button onClick={() => setShowModal(true)} className='btn-add'>
          Add Contact
        </button>
      </div>
      <ul>{contacts}</ul>
      <AddContact show={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default ContactList;
