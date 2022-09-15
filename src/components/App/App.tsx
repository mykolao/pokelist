import styles from 'components/App/App.module.scss';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
