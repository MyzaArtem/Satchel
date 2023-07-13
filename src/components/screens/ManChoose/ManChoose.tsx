import { NavigationBar } from "../../NavigationBar/NavigationBar"
import { CatalogNavButtonData } from "../../../data/NavButton.data"
import styles from './ManChoose.module.css'
import { Aside } from "../../layouts/Aside/Aside"
import { ProductsSection } from "../../layouts/ProductsSection/ProductsSection"
import { AsideItemData } from "../../../data/ManAsideItem.data"
import { ProductCardData } from "../../../data/ManProductCard.data"
import { Clothes } from "../../../types/types"
import { useState } from "react"
import { AppLayout } from "../../layouts/AppLayout/AppLayout"

export const ManChoose: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<Clothes>(Clothes.Clothing);
  const handleFilterChange = (filter: Clothes) => {
    setSelectedFilter(filter);
  };
    return (
        <>
          <AppLayout>
            <NavigationBar data={CatalogNavButtonData} onFilterChange={handleFilterChange}/>
            {selectedFilter != Clothes.Clothing 
            ? <div className={styles.head}>Мужская одежда | {selectedFilter}</div>
            : <div className={styles.head}>Мужская одежда</div> }
            <div className={styles.container}>
              <Aside data={AsideItemData} onFilterChange={handleFilterChange}/>
              <ProductsSection data={ProductCardData} filter={selectedFilter}/>
            </div>
          </AppLayout>
        </>
    )
}