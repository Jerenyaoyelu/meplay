import styles from './index.module.less';
import { CrSearchBar } from '@/components/SearchBar';
import { LetterIndex } from '@/components/LetterIndex';
import { CanvasIndex } from '@/components/CanvasIndex';

const list = ['A', 'B', 'C', 'D', 'E']

export const Contact: React.FC = () => {
  return (
    <div className={styles['cr-contact-wrap']}>
      <CrSearchBar />
      <div className={styles['cr-contact-content']}>
        <div className={styles['cr-list']}>
          {
            list.map((l, index) => {
              const c = l.toUpperCase();
              return (
                <div key={index}>
                  <div id={c}>{c}</div>
                  <span>这是内容</span>
                </div>
              )
            })
          }
        </div>
        <CanvasIndex />
        {/* <LetterIndex list={list} /> */}
      </div>
    </div>
  )
}