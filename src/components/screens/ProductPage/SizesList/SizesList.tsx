import { SizesListItem } from "../../../ui/SizesListItem/SizesListItem"
import { SizesListItemProps } from "../../../ui/SizesListItem/SizesListItem"
import styles from "./SizesList.module.css"

interface SizesListProps {
    list: SizesListItemProps[]
  }

export const SizesList:React.FC<SizesListProps> = ({ list }) => {

    return (
        <ul className={styles.sizesList}>
            {list.map((item, index) => <SizesListItem key={index} size={item.size}/> )}
        </ul>
    )
}