import styles from './styles.module.scss';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...otherProps } = props;
  return <input className={`${className} ${styles.input}`} {...otherProps} />;
}
