import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { enableResult } from '../../features/enableScreen/enableScreenSlice';
import { RootState } from '../../redux/store';
import styles from './styles.module.scss';

function Victory() {
  const [result, setResult] = useState('');
  const player = useSelector((state: RootState) => state.scoreboard.player);
  const will = useSelector((state: RootState) => state.scoreboard.will);
  const name = useSelector((state: RootState) => state.user.name);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (player === 10) {
      setResult(name);
      dispatch(enableResult);
      return;
    }
    if (will === 10) {
      setResult('Will');
      dispatch(enableResult);
      return;
    }
  }, [dispatch, name, player, will]);

  const handleClick = () => {
    navigate(0);
  };
  return (
    <div className={styles.container}>
      <h1>{`Parabéns ${result}. Você jogou muito.`}</h1>
      <button
        onClick={() => handleClick()}
        type="submit"
        disabled={name.length <= 0}
      >
        Play Again
      </button>
    </div>
  );
}

export default Victory;
