import Card from './Card';
import { useSelector } from 'react-redux';

function CardsList() {
  const contactsList = useSelector((state) => state.contacts.list);

  let cards = contactsList
    .filter((contact) => contact.onBoard)
    .map((contact) => <Card key={contact.id} contact={contact} />);

  cards = cards.length ? cards : <p>select contact</p>;

  return <div className='cards'>{cards}</div>;
}

export default CardsList;
