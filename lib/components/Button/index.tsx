import styles from './styles.module.scss';

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...otherProps } = props;
  return <button className={`${className} ${styles.button}`} {...otherProps} />;
}
