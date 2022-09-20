import { dataIcons } from '../../data/icons';
import Button from '../Button';
import styles from './styles.module.scss';
import bgTriangulo from '../../assets/bg-triangle.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { dataIconsSort } from '../../data/iconsSort';
import Results from '../Results';
import { RootState } from '../../redux/store';
import { disable } from '../../features/enableScreen/enableScreenSlice';
import Victory from '../Victory';

export interface Result {
  id: number;
  url: string;
  name: string;
  cor: string;
}
function Main(): JSX.Element {
  const [playerChoice, setPlayerChoice] = useState<Result[]>([]);
  const [willChoice, setWillChoice] = useState<Result[]>([]);
  const [data] = useState(dataIconsSort);
  const enableScreen = useSelector(
    (state: RootState) => state.enableScreen.enable,
  );
  const enableMain = useSelector(
    (state: RootState) => state.enableScreen.enableMain,
  );

  const player = useSelector((state: RootState) => state.scoreboard.player);
  const will = useSelector((state: RootState) => state.scoreboard.will);

  const dispatch = useDispatch();

  const handleClick = (id: number) => {
    dispatch(disable());
    const playerResult = data.filter((icon) => icon.id === id);
    const sort = data.sort(() => 0.5 - Math.random());
    const willResult = data.filter((icon) => icon.id === sort[0].id);
    setPlayerChoice(playerResult);
    setWillChoice(willResult);
  };
  return (
    <>
      {enableMain && (
        <main className={styles.container}>
          {enableScreen && (
            <section className={styles.content}>
              <img
                className={styles.bgTriangulo}
                src={bgTriangulo}
                alt="bgTriangulo"
              />
              {dataIcons.map((icon) => (
                <Button
                  key={icon.id}
                  name={icon.name}
                  url={icon.url}
                  id={icon.id}
                  cor={icon.cor}
                  onClick={() => handleClick(icon.id)}
                />
              ))}
            </section>
          )}
          {player === 0 || will === 0 ? (
            <Victory />
          ) : (
            <Results player={playerChoice} will={willChoice} />
          )}
        </main>
      )}
    </>
  );
}

export default Main;
