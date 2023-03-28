import styles from './index.module.less';
import { CrSearchBar } from '@/components/SearchBar';
import { CanvasIndex } from '@/components/CanvasIndex';

export interface DataItem {
  value: string;
  label: string;
}

export interface ContactItem {
  index: string;
  dataArray: DataItem[];
}

interface ContactProps {
  items: ContactItem[];
}

export const Contact: React.FC<ContactProps> = ({ items }) => {
  return (
    <div className={styles['cr-contact-wrap']}>
      <CrSearchBar />
      <div className={styles['cr-contact-content']}>
        <div className={styles['cr-list']}>
          {
            items.map((item, i) => {
              const c = item.index.toUpperCase();
              return (
                <div key={i}>
                  <div id={c}>{c}</div>
                  {
                    item.dataArray.map((sub, subI) => {
                      return (
                        <div key={subI}>{sub.label}</div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
        <CanvasIndex
          effect='modal'
          indexOptions={{
            width: 30
          }}
          list={items.map((item) => item.index)} />
      </div>
    </div>
  )
}