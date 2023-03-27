import classNames from 'classnames';
import { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import styles from './index.module.less';

type EffectType = 'none' | 'emphasize' | 'custom'

interface IndexProp {
  list: string[];
  className?: string;
  effect?: EffectType
}

export const LetterIndex: React.FC<IndexProp> = ({ list, className, effect = 'none' }) => {
  const [clicked, setClicked] = useState<string>('');
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [indexRef, setIndexRef] = useState<HTMLDivElement | null>(null);

  const indexIns = useCallback((node: HTMLDivElement) => {
    if (node) {
      setIndexRef(node);
    }
  }, [])

  useEffect(() => {
    if (indexRef) {
      indexRef.addEventListener('pointerdown', (e) => {
        console.log('ppp', e);
      })
      indexRef.addEventListener('pointermove', (e) => {
        console.log('lll', e);

      })
    }
    return () => { }
  }, [indexRef])


  const handleClick = (c: string) => {
    if (effect === 'custom') return;
    if (effect === 'none') {
      const el = document.getElementById(c);
      if (!el) return;
      el.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest',
      });
    }
  }

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setClicked('');
    }, 600)
  }, [clicked])


  return (
    <div ref={indexIns} className={classNames(styles['cr-index'], className)}>
      {
        list.map((l: string, index) => {
          const c = l.toUpperCase();
          return (
            <span
              className={clicked === c ? styles.clicked : ''}
              key={index}
              onClick={() => {
                handleClick(c);
                setClicked(c);
              }}
            >
              {c}
            </span>
          )
        })
      }
    </div>
  )
}