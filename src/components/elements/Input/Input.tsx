import type { ReactNode } from 'react';

import styles from './Input.module.scss';

type InputProps = {
    placeholder?: string;
    width?: string;
    endAdornment?: ReactNode;
}

const Input: React.FC<InputProps> = ({ placeholder, endAdornment, width }) => (
    <div  style={{width}} className={styles.container} >
        <input type="text" placeholder={placeholder}></input>
        <i>{endAdornment}</i>
    </div>
);

export default Input;