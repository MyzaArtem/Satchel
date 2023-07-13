import { Card, Gender } from "../../../types/types"
import styles from "./ProductCard.module.css"
import { Link } from "react-router-dom"

interface ProductCardProps{
  data: Card
}

export const ProductCard:React.FC<ProductCardProps> = ({data}) => {
  
  let linkFlag = data.gender === Gender.Female ? 'wooman-choose' : 'man-choose';

  return (
    <div key={data.id} className={styles.item}>
      <Link to={`/${linkFlag}/${data.brand}/${data.id}`}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(/${data.image})`
          }}>
        </div>
      </Link>
          
      <div className={styles.info}>
        <h2>{data.brand}</h2>
        <p>{new Intl.NumberFormat('ru-Ru', {style:
          'currency', currency: 'USD',
          currencyDisplay: 'narrowSymbol'}).format(data.price)}
        </p>
      </div>
    </div>
  )
}