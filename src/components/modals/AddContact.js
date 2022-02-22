import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../store/slices/contactsSlice';

function AddContact(props) {
  const nameRef = useRef();
  const phoneRef = useRef();

  const dispatch = useDispatch();

  const handleAdd = () => {
    const contact = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
    };
    dispatch(addContact(contact));
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

export default AddContact;
