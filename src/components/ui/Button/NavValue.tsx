import styles from './NavButton.module.css'
import { NavBarItem } from '../../../types/types'

interface NavValueProps{
  data: NavBarItem
}

export const NavValue: React.FC<NavValueProps> = ({data}) => {
    return(
        <>
          <div className={styles.container}>
            <p className={styles.info}>{data.text}</p>      
          </div>
        </>
    )
}