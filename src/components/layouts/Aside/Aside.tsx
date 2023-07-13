import { Clothes, AsideItem as Item} from '../../../types/types'
import { AsideItem } from '../../ui/AsideItem/AsideItem'
import styles from './Aside.module.css'
import { useState } from 'react'

interface AsideProps {
    data: Item[],
    onFilterChange: (filter: Clothes) => void
}

export const Aside:React.FC<AsideProps> = ({data, onFilterChange}) => {

    const [selectedFilter, setSelectedFilter] = useState<Clothes>(Clothes.Clothing)

    const handleFilterClick = (link: Clothes) => {
        setSelectedFilter(link);
        onFilterChange(link);
    }

    return(
        <>
          <aside className={styles.productList}>
            <ul>
                {data.map(({text, link}, id) => (
                    <button key={id} className={styles.btn} onClick={() => handleFilterClick(link)}>
                        <AsideItem id={id} text={text} link={link}  />
                    </button>
                ))}
            </ul>
          </aside>
        </>
    )
}