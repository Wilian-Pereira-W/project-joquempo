import Header from '../../components/Header';
import Main from '../../components/Main';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
}

export default Home;
