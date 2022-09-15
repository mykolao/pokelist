import styles from 'components/App/App.module.scss';
import CardList from 'components/CardList';
import Footer from 'components/Footer';
import Header from 'components/Header';

const App = () => (
  <div className={styles.app}>
    <Header />
    <CardList />
    <Footer />
  </div>
);

export default App;
