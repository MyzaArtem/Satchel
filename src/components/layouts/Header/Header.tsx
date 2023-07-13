import styles from './Header.module.css'
import { FindForm } from '../../ui/FindForm/FindForm'
import { Link } from 'react-router-dom'
import Logo from '../../../../public/Logo.svg'
import Favourite from '../../../../public/Favourite.svg'
import Basket from '../../../../public/Basket.svg'
import UserArea from '../../../../public/UserArea.svg'

export const Header:React.FC = () => {
    return(
        <>
          <div className={styles.container}>
            <div className={styles.findform}>
                <FindForm />
            </div>
            <div>
                <Link to='/'><img  className={styles.logo} src={Logo} alt='Логотип'/></Link>
            </div>
            <div className={styles.linkgroup}>
                <Link to={'/Favourite'}><img src={Favourite} alt="Избранное" /></Link>
                <Link to={'/Basket'}><img src={Basket} alt="Корзина" /></Link>
                <Link to={'/UserArea'}><img src={UserArea} alt="Личный кабинет" /></Link>
            </div>
          </div>
        </>
    )
}
