import styles from './Footer.module.css'
import { FooterList } from './FooterList/FooterList'
import { FooterListData } from '../../../data/FooterList.data'



export const Footer:React.FC = () => {
    return (
        <footer className={styles.container}>
            <FooterList data={FooterListData}/>
        </footer>
    )
}