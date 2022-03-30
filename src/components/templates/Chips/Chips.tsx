import { useState } from "react";

import Chip from "components/elements/Chip/Chip";
import styles from "./Chips.module.scss";

type ChipsProps = {
    chips: String[];
    initialActive?: number;
}

const Chips = ({ chips, initialActive }: ChipsProps) => {
    const [active, setActive] = useState<number | undefined>(initialActive);

    if (!chips.length) return null;

    return (
        <div className={styles.chips}>
            {chips.map((el, i) => <Chip active={active === i} onClick={() => setActive(i)} key={i}>{el}</Chip>)}
        </div>
    )
}

export default Chips;