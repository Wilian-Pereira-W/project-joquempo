import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './styles.module.scss';
function Header(): JSX.Element {
  const player = useSelector((state: RootState) => state.scoreboard.player);
  const will = useSelector((state: RootState) => state.scoreboard.will);
  const draw = useSelector((state: RootState) => state.scoreboard.draw);
  return (
    <header className={styles.container}>
      <h1>Joquempô</h1>
      <section className={styles.score}>
        <section>
          <h3>Player</h3>
          <p>{player}</p>
        </section>
        <section>
          <h3>Empate</h3>
          <p>{draw}</p>
        </section>
        <section>
          <h3>Will</h3>
          <p>{will}</p>
        </section>
      </section>
    </header>
  );
}

export default Header;
