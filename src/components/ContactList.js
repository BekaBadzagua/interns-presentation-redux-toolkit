import { useState, useEffect } from 'react';
import AddContact from './modals/AddContact';
import { connect } from 'react-redux';
import * as actions from '../store/actions/contactsAction';

function ContactList(props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    props.initContacts();
  });

  const contacts = props.contacts.map((contact) => {
    return (
      <li onClick={() => props.addContactOnBoard(contact.id)} key={contact.id}>
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

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initContacts: () => dispatch(actions.initContacts()),
    addContactOnBoard: (id) => dispatch(actions.addContactOnBoard(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
