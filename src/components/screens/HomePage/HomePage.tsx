import { Link } from 'react-router-dom'
import styles from "./HomePage.module.css"
import Men from '../../../../public/main-men.jpg'
import Woman from '../../../../public/main-woman.jpg'
import { NavigationBar } from '../../NavigationBar/NavigationBar'
import { MainPageNavButtonData } from '../../../data/NavButton.data'
import { AppLayout } from "../../layouts/AppLayout/AppLayout"

export const HomePage:React.FC = () => {
    return (
        <>
          <AppLayout>
            <NavigationBar data={MainPageNavButtonData}/>
            <div className={styles.container}>
              <Link to={'/man-choose'}>
                <div 
                  style={{
                    backgroundImage: `url(${Men})`
                  }}
                  className={styles.image}>
                    
                </div>
              </Link> 
              <Link to={'/woman-choose'}>
                <div 
                  style={{
                    backgroundImage: `url(${Woman})`
                  }}
                  className={styles.image}>
                </div>
              </Link>
            </div>
          </AppLayout>
        </>
    )
}