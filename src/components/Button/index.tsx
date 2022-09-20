import styles from './styles.module.scss';

export interface Props {
  id: number;
  url: string;
  name: string;
  cor: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (id: number) => void;
  disable?: boolean;
}

function Button(props: Props): JSX.Element {
  return (
    <button
      type="button"
      style={{ border: `8px solid ${props.cor}` }}
      className={styles.button}
      onClick={() => props.onClick?.(props.id)}
      disabled={props.disable}
    >
      <img src={props.url} alt={props.name} />
    </button>
  );
}

export default Button;
