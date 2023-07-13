import { useState, ChangeEvent } from 'react'
import styles from './FindForm.module.css'
import Glass from '../../../../public/Glass.svg'

export const FindForm:React.FC = () => {
    const [data, setData] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value);
      };

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <img className={styles.glass} src={Glass} alt="Лупа" />
                <input 
                value={data}
                onChange={handleChange}
                type="text" placeholder='Поиск' 
                />
            </form>
        </div>
    )
}