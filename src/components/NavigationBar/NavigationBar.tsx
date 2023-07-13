import { Clothes, NavBarItem } from "../../types/types"
import { NavValue } from "../ui/Button/NavValue"
import { useState } from "react"
import styles from './NavigationBar.module.css'

interface NavigationBarProps {
    data: NavBarItem[]
    onFilterChange?: (filter: Clothes) => void
}

export const NavigationBar: React.FC<NavigationBarProps> = ({data, onFilterChange}) => {

    const [selectedFilter, setSelectedFilter] = useState<Clothes>(Clothes.Clothing)

    const handleFilterClick = (link: Clothes) => {
        setSelectedFilter(link);
        onFilterChange && onFilterChange(link);
    }

    return (
        <>
            <div className={styles.container}>
                {data.map(({text, link}, index) => (
                    <button key={index} onClick={() => handleFilterClick(link)}>
                        <NavValue data={data[index]}/>
                    </button>
                ))}
            </div>
        </>
    )
}