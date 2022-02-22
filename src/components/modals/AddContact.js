import { useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/contactsAction';

function AddContact(props) {
  const nameRef = useRef();
  const phoneRef = useRef();

  const handleAdd = () => {
    const contact = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
    };
    props.addContact(contact);
    props.setShowModal(false);
  };

  if (!props.show) {
    return <div></div>;
  }
  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <div className='modal-content'>
          <div className='form-group'>
            <label>Name</label>
            <input ref={nameRef} type='text' name='name' />
          </div>
          <div className='form-group'>
            <label>Phone</label>
            <input ref={phoneRef} type='text' name='phone' />
          </div>
        </div>
        <div className='modal-footer'>
          <button onClick={handleAdd} className='edit'>
            Add
          </button>
          <button onClick={() => props.setShowModal(false)} className='close'>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(actions.addContact(contact)),
  };
};

export default connect(null, mapDispatchToProps)(AddContact);
