import { Card } from '../../../types/types'
import { ProductCard } from '../../ui/ProductCard/ProductCard'
import styles from './ProductsSection.module.css'
import {Clothes} from '../../../types/types'

interface ProductsSectionProps{
    data: Card[];
    filter: Clothes
}

export const ProductsSection:React.FC<ProductsSectionProps> = ({data, filter}) => {

    const filteredData = data.filter(card => Array.isArray(card.type) ? card.type.includes(filter) : card.type === filter);
    console.log(data)
    console.log(filter, filteredData)

    return(
        <div className={styles.container}>
            {filter === Clothes.Clothing 
            ? data.map(card => (<ProductCard key={card.id} data={card}/>))
            : filteredData.map(card => (<ProductCard key={card.id} data={card}/>))}
        </div>
    )
}