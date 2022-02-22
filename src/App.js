import Layout from './layout/Layout';
import ContactList from './components/ContactList';
import CardList from './components/CardsList';
import './App.css';

function App() {
  return (
    <Layout>
      <div className='content'>
        <ContactList />
        <CardList />
      </div>
    </Layout>
  );
}

export default App;
