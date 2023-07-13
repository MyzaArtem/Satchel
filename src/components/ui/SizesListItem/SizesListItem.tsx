import styles from "./SizesListItem.module.css"
import { useState } from 'react'

export interface SizesListItemProps{
    size: string
}

export const SizesListItem:React.FC<SizesListItemProps> = ({size}) => {

    const [isPressed, setIsPressed] = useState(false);

    const handleClick = () => {
        setIsPressed(!isPressed);
    };

    const buttonClassName = isPressed ? styles.sizesListItemPressed : styles.sizesListItem;

    return (
        <>
            <li className={buttonClassName}>
                <button onClick={handleClick}>{size}</button>
            </li>
        </>
    )
}