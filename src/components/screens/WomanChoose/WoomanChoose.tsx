import { NavigationBar } from "../../NavigationBar/NavigationBar"
import { Aside } from "../../layouts/Aside/Aside"
import { ProductsSection } from "../../layouts/ProductsSection/ProductsSection"
import styles from "./WoomanChoose.module.css"
import { CatalogNavButtonData } from "../../../data/NavButton.data"
import { AsideItemData } from "../../../data/WomanAsideItem.data"
import { ProductCardData } from "../../../data/WomanProductCard.data"
import { Clothes } from "../../../types/types"
import {useState} from "react"
import { AppLayout } from "../../layouts/AppLayout/AppLayout"

export const WomanChoose: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<Clothes>(Clothes.Clothing);

  const handleFilterChange = (filter: Clothes) => {
    setSelectedFilter(filter);
  };

    return (
        <>
          <AppLayout>
            <NavigationBar data={CatalogNavButtonData} onFilterChange={handleFilterChange}/>
            <div className={styles.head}>Женская одежда</div>
            <div className={styles.container}>
              <Aside data={AsideItemData} onFilterChange={handleFilterChange}/>
              <ProductsSection data={ProductCardData} filter={selectedFilter}/>
            </div>
          </AppLayout>
        </>
    )
}