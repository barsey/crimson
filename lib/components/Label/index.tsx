import styles from './styles.module.scss';

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { className, ...otherProps } = props;
  return <label className={`${className} ${styles.label}`} {...otherProps} />;
}
