import { useCallback, useEffect, useRef, useState } from 'react';
import { DrawIndex, IndexOptions, SelectedDataType } from '@contact/core';
import styles from './index.module.less';
import classNames from 'classnames';


type IndexEffect = 'popup' | 'modal' | 'custom';

interface IndexProps {
  effect?: IndexEffect;
  duration?: number;
  list: string[];
  indexOptions?: Partial<IndexOptions>
}

export const CanvasIndex: React.FC<IndexProps> = ({ list, indexOptions, effect = 'modal', duration = 3000 }) => {
  const [ref, setRef] = useState<HTMLCanvasElement | null>(null);
  const canvasRef = useCallback((node: HTMLCanvasElement) => {
    if (node) {
      setRef(node);
    }
  }, [])

  const [active, setActive] = useState<string>('');
  const [showActive, setShowActive] = useState<boolean>(false);

  const indexRef = useRef<any>(null);
  const timer = useRef<any>(null);

  const handleClick = (c: string) => {
    if (effect === 'custom') return;
    const el = document.getElementById(c);
    if (!el) return;
    el.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'nearest',
    });
  }

  useEffect(() => {
    if (ref && !indexRef.current) {
      indexRef.current = new DrawIndex(ref, list || [], indexOptions);
      indexRef.current.on('onselect', ({ letter, x, y }: SelectedDataType) => {
        if (active !== letter) {
          setActive(letter);
          setShowActive(true);
          handleClick(letter);
        }
      })
      indexRef.current.drawIndex();
    }
  }, [ref])

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
      // 重新设置定时器
      if (showActive) {
        timer.current = setTimeout(() => {
          setShowActive(false);
        }, duration)
      }
    } else {
      timer.current = setTimeout(() => {
        setShowActive(false);
      }, duration)
    }
  }, [showActive])

  return (
    <div className={styles['ci-wrapper']}>
      <div className={classNames(styles[effect === 'modal' ? 'ci-emphasize-modal' : ''], styles['ci-emphasize'], styles[showActive ? 'ci-display' : 'ci-hidden'])}>
        {active}
      </div>
      <canvas
        style={{
          touchAction: 'none',
          backgroundColor: 'transparent'
        }}
        ref={canvasRef}
      ></canvas>
    </div>
  )
}