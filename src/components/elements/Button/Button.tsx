import clsx from 'clsx';

import styles from './Button.module.scss';

type ButtonProps = {
    variant?: 'contained' | 'outlined';
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => <button className={
    clsx(
        styles.button, 
        variant === 'contained' ? styles.button_contained : styles.button_outlined,
    )
}>{children}</button>;

export default Button;