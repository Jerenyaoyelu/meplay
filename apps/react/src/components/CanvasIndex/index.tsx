import { useCallback, useEffect, useRef, useState } from 'react';
import { DrawIndex, SelectedDataType } from '@meplay/core';
import styles from './index.module.less';
import classNames from 'classnames';
import bubbleIcon from './bubble.svg';
import { IndexEffect, IndexProps } from '../../../typings/meplay-react';

export const CanvasIndex: React.FC<IndexProps> = ({
  list,
  indexOptions,
  effect = 'popup',
  duration = 2000,
  activeColor = 'lightgreen',
  className,
  emphasizeClassName,
  onClickLetter,
  onDrawIndex
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

  const indexRef = useRef<DrawIndex | null>(null);
  const timer = useRef<any>(null);

  const lastActive = useRef<string>('');

  const effectRef = useRef<IndexEffect>(effect)

  const handleClick = (c: string) => {
    const el = document.getElementById(c);
    if (!el) return;
    el.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'nearest',
    });
  }

  useEffect(() => {
    effectRef.current = effect;
  }, [effect])

  useEffect(() => {
    if (ref && !indexRef.current && list.length) {
      indexRef.current = new DrawIndex(ref, list || [], indexOptions);
      onDrawIndex?.(indexRef.current);
      indexRef.current?.on('onselect', ({ letter, x, y }: SelectedDataType) => {
        if (lastActive.current !== letter) {
          // 将上一个字母恢复颜色
          if (lastActive.current) {
            indexRef.current?.resetText(lastActive.current);
          }
          lastActive.current = letter;
          setActive(letter);
          if (effectRef.current === 'custom') {
            onClickLetter?.(letter);
          } else {
            if (effectRef.current === 'wechat') {
              setCurOffset({ x, y });
              indexRef.current?.activityWeChatEffectActiveText(activeColor, letter);
            } else {
              indexRef.current?.changeTextColor(activeColor, letter);
            }
            setShowActive(true);
          }
          handleClick(letter);
        }
      })
      indexRef.current.drawIndex();
    }
  }, [ref, list])

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
      // 重新设置定时器
      if (showActive) {
        timer.current = setTimeout(() => {
          indexRef.current?.resetText(active);
          setShowActive(false);
        }, duration)
      }
    } else {
      timer.current = setTimeout(() => {
        indexRef.current?.resetText(active);
        setShowActive(false);
      }, duration)
    }
  }, [active])

  return (
    <div className={classNames(styles['ci-wrapper'])}>
      {effect === 'popup' && (
        <div
          className={classNames(emphasizeClassName, styles[effect === 'popup' ? 'ci-emphasize-popup' : ''], styles['ci-emphasize'], styles[showActive ? 'ci-display' : 'ci-hidden'])}
        >
          {active}
        </div>
      )}
      <div className={classNames(className, effect === 'wechat' ? styles['ci-relative'] : '')}>
        {
          effect === 'wechat' && (
            <div
              style={{
                backgroundImage: `url(${bubbleIcon})`,
                top: (curOffset.y) + 'px',
                transform: 'translate(0, -20px)'
              }}
              className={classNames(styles['ci-emphasize-wechat'], styles['ci-emphasize'], styles[showActive ? 'ci-display' : 'ci-hidden'], emphasizeClassName)}
            >
              {active}
            </div>
          )
        }
        <canvas
          style={{
            touchAction: 'none',
          }}
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  )
}