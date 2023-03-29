import { useCallback, useEffect, useRef, useState } from 'react';
import { DrawIndex, IndexOptions, SelectedDataType } from '@contact/core';
import styles from './index.module.less';
import classNames from 'classnames';
import bubbleIcon from './bubble.svg';


type IndexEffect = 'base' | 'wechat' | 'popup' | 'custom';

interface IndexProps {
  effect?: IndexEffect;
  duration?: number;
  list: string[];
  indexOptions?: Partial<IndexOptions>;
  activeColor?: string;
}

export const CanvasIndex: React.FC<IndexProps> = ({
  list,
  indexOptions,
  effect = 'popup',
  duration = 3000,
  activeColor = 'lightgreen',
}) => {
  const [ref, setRef] = useState<HTMLCanvasElement | null>(null);
  const canvasRef = useCallback((node: HTMLCanvasElement) => {
    if (node) {
      setRef(node);
    }
  }, [])

  const [active, setActive] = useState<string>('');
  const [showActive, setShowActive] = useState<boolean>(false);
  const [curOffset, setCurOffset] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

  const indexRef = useRef<any>(null);
  const timer = useRef<any>(null);

  const lastActive = useRef<string>('');

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
        if (lastActive.current !== letter) {
          // 将上一个字母恢复颜色
          if (lastActive.current) {
            indexRef.current.resetText(lastActive.current);
          }
          lastActive.current = letter;
          setActive(letter);
          if (effect === 'wechat') {
            setCurOffset({ x, y });
            indexRef.current.activityWeChatEffectActiveText(activeColor, letter);
          } else {
            indexRef.current.changeTextColor(activeColor, letter);
          }
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
          indexRef.current.resetText(active);
          setShowActive(false);
        }, duration)
      }
    } else {
      timer.current = setTimeout(() => {
        indexRef.current.resetText(active);
        setShowActive(false);
      }, duration)
    }
  }, [active])

  return (
    <div className={classNames(styles['ci-wrapper'], effect === 'wechat' ? styles['ci-relative'] : '')}>
      {effect !== 'base' && effect !== 'custom' && (
        <div
          style={effect === 'wechat' ? {
            backgroundImage: `url(${bubbleIcon})`,
            top: (curOffset.y) + 'px',
            transform: 'translate(0, -20px)'
          } : {}}
          className={classNames(styles[effect === 'wechat' ? 'ci-emphasize-wechat' : ''], styles[effect === 'popup' ? 'ci-emphasize-popup' : ''], styles['ci-emphasize'], styles[showActive ? 'ci-display' : 'ci-hidden'])}
        >
          {active}
        </div>
      )}
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