import styles from './ProductPage.module.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Clothes, Gender, DetailCard } from '../../../types/types';
import { PageService } from '../../../services/page.service';
import { SizesList } from './SizesList/SizesList';
import { AppLayout } from '../../layouts/AppLayout/AppLayout';

export const ProductPage:React.FC = () => {
  const clearPage: DetailCard = {
    id: 0,
    image: '',
    brand: '',
    price: 0,
    type: Clothes.Swimwear,
    gender: Gender.Female,
    description: '',
    sizes: []
  }
  

  const {linkFlag, id} = useParams();

  const [page, setPage] = useState<DetailCard>(clearPage)

  useEffect(() => {
    if(!id) return

    const fetchData = async () => {
      const response = await PageService.getByID(id, linkFlag!)
      setPage(response)
    }
    fetchData()
  }, [id])

  console.log(page)

  return (
    <>
      <AppLayout>
        <div className={styles.container}>
            <div
              className={styles.image}
              style={{
                  backgroundImage: `url(/${page.image})`
              }}>
            </div>
            <div className={styles.info}>
                <h2 className={styles.brand}>{page.brand}</h2>
                <p className={styles.description}>{page.description}</p>
                <div className={styles.price}>{new Intl.NumberFormat('ru-Ru', {style:
                  'currency', currency: 'USD',
                  currencyDisplay: 'narrowSymbol'}).format(page.price)}
                </div>
                <SizesList list={page.sizes} />
                <button className={styles.btn}>Купить</button>
            </div>
          </div>
      </AppLayout>
    </>
  );
};