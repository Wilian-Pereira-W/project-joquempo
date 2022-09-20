import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addName } from '../../features/user/userSlice';
import styles from './styles.module.scss';
import {
  enableMain,
  enableScoreboard,
} from '../../features/enableScreen/enableScreenSlice';

function UserName() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addName(name));
    dispatch(enableScoreboard());
    dispatch(enableMain());
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Digite seu nome"
        value={name}
        maxLength={12}
        onChange={({ target }) => setName(target.value)}
        required
      />
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

export default UserName;
