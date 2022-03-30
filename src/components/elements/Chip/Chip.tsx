import clsx from 'clsx';

import styles from './Chip.module.scss';

type ChipProps = {
    active?: boolean;
    onClick?: () => void;
}

const Chip: React.FC<ChipProps> = ({ children, active, onClick }) => <span onClick={onClick} tabIndex={1} className={
    clsx(
        styles.chip, 
        active && styles.chip_active
    )}>{children}</span>;

export default Chip;