import styles from './FooterList.module.css'
import { FooterListItem } from '../../../../types/types';

interface FooterListProps {
    data: FooterListItem[];
}
  
export const FooterList: React.FC<FooterListProps> = ({ data }) => {
    const itemsPerRow = 4;
    const rows:FooterListItem[] = [...Array(Math.ceil(data.length / itemsPerRow))];
    const itemRows:FooterListItem[][] = rows.map((row, index) => data.slice(index * itemsPerRow, index * itemsPerRow + itemsPerRow));
  
    return (
      <>
        {itemRows.map((row, index) => (
          <div className={styles.footeritem} key={index}>
            <h2 className={styles.head}>{row[0].headText}</h2>
            <ul className={styles.footerlist}>
              {row.map((item) => (
                <li className={styles.footerlistitem} key={item.id}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
           </div>
        ))}
      </>
    );
};