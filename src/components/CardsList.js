import Card from './Card';
import { connect } from 'react-redux';

function CardsList(props) {
  let cards = props.contacts
    .filter((contact) => contact.onBoard)
    .map((contact) => <Card key={contact.id} contact={contact} />);

  cards = cards.length ? cards : <p>select contact</p>;

  return <div className='cards'>{cards}</div>;
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.list,
  };
};

export default connect(mapStateToProps)(CardsList);
