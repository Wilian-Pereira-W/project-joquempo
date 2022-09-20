import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import UserName from '../UserName';
import styles from './styles.module.scss';
function Header(): JSX.Element {
  const player = useSelector((state: RootState) => state.scoreboard.player);
  const will = useSelector((state: RootState) => state.scoreboard.will);
  const draw = useSelector((state: RootState) => state.scoreboard.draw);
  const name = useSelector((state: RootState) => state.user.name);
  const enableScoreboard = useSelector(
    (state: RootState) => state.enableScreen.enableScoreboard,
  );
  return (
    <header className={styles.container}>
      <h1>Joquempô</h1>
      {enableScoreboard ? (
        <section className={styles.score}>
          <section>
            <h3>{name}</h3>
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
      ) : (
        <UserName />
      )}
    </header>
  );
}

export default Header;
