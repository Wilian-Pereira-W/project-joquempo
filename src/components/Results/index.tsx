import { useCallback, useEffect, useState } from 'react';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { Result } from '../Main';
import {
  incrementDraw,
  incrementPlayer,
  incrementWill,
} from '../../features/scoreboard/scoreboardSlice';

import styles from './styles.module.scss';
import { enable } from '../../features/enableScreen/enableScreenSlice';
import { RootState } from '../../redux/store';

export interface Props {
  player: Result[];
  will: Result[];
}
function Results(props: Props): JSX.Element {
  const [result, setResult] = useState<string>('');
  const enableScreen = useSelector(
    (state: RootState) => state.enableScreen.enable,
  );
  const dispatch = useDispatch();

  const validateResults = useCallback(
    (player: Result[], will: Result[]) => {
      if (player.length !== 0 && will.length !== 0) {
        if (player[0].id === 1 && will[0].id === 2) {
          setResult('Derrota');
          dispatch(incrementWill());
          console.log('oi');
        } else if (player[0].id === 1 && will[0].id === 3) {
          setResult('Vitória');
          dispatch(incrementPlayer());
        } else if (player[0].id === 2 && will[0].id === 1) {
          setResult('Vitória');
          dispatch(incrementPlayer());
        } else if (player[0].id === 2 && will[0].id === 3) {
          setResult('Derrota');
          dispatch(incrementWill());
        } else if (player[0].id === 3 && will[0].id === 1) {
          setResult('Derrota');
          dispatch(incrementWill());
        } else if (player[0].id === 3 && will[0].id === 2) {
          setResult('Vitória');
          dispatch(incrementPlayer());
        } else {
          setResult('Empate');
          dispatch(incrementDraw());
        }
      }
    },
    [dispatch],
  );

  useEffect(() => {
    validateResults(props.player, props.will);
  }, [props.player, props.will, validateResults]);

  const handleClick = () => {
    dispatch(enable());
  };

  return (
    <div
      className={styles.container}
      style={{ display: `${enableScreen ? 'none' : 'flex'}` }}
    >
      {props.player.map((result) => (
        <Button
          key={result.id}
          name={result.name}
          url={result.url}
          id={result.id}
          cor={result.cor}
          disable={true}
        />
      ))}
      <div className={styles.result}>
        <h2>{result}</h2>
        <button onClick={() => handleClick()} type="button">
          Play Again
        </button>
      </div>
      {props.will.map((result) => (
        <Button
          key={result.id}
          name={result.name}
          url={result.url}
          id={result.id}
          cor={result.cor}
          disable={true}
        />
      ))}
    </div>
  );
}

export default Results;
