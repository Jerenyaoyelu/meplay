import { useCallback, useEffect, useRef, useState } from 'react';
import { DrawIndex, SelectedDataType } from '@contact/core';
import styles from './index.module.less';

const list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export const CanvasIndex: React.FC = () => {
  const [ref, setRef] = useState<HTMLCanvasElement | null>(null);
  const [height, setHeight] = useState<number>(list.length * 24);
  const canvasRef = useCallback((node: HTMLCanvasElement) => {
    if (node) {
      setRef(node);
    }
  }, [])

  const indexRef = useRef<any>(null);

  useEffect(() => {
    if (ref && !indexRef.current) {
      indexRef.current = new DrawIndex(ref, list);
      indexRef.current.on('onselect', ({ letter, x, y }: SelectedDataType) => {
        console.log('runnn', letter, x, y);

      })
      indexRef.current.drawIndex();
    }
  }, [ref])

  return (
    <canvas
      style={{
        touchAction: 'none',
        backgroundColor: 'transparent'
      }}
      ref={canvasRef}
    ></canvas>
  )
}