'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import DiceWorld, { DiceSettings } from './scene';
import Image from 'next/image';

const Dice: React.FC = () => {
  const [canvasEl, setCanvasEl] = useState<HTMLCanvasElement | null>(null);
  const ref = useCallback((node: HTMLCanvasElement) => {
    if (node) {
      setCanvasEl(node);
    }
  }, [])

  const diceWorldRef = useRef<DiceWorld | null>(null);
  const [params, setParams] = useState<DiceSettings>({
    numOfDice: 2,
    segments: 40,
    edgeRadius: .1,
    notchRadius: .15,
    notchDepth: .09,
  })
  const [result, setResult] = useState<number>(0);
  const addUpTag = useRef<boolean>(true);
  const sum = useRef<number>(0);

  const handleThrow = () => {
    if (!diceWorldRef.current) return;
    addUpTag.current = false;
    diceWorldRef.current.throwDice();
  }

  useEffect(() => {
    if (canvasEl) {
      // 首次需要示例化
      if (!diceWorldRef.current) {
        diceWorldRef.current = new DiceWorld({
          diceSettings: params
        })
        diceWorldRef.current.init(canvasEl);

        // 监听骰子点数
        diceWorldRef.current.on('result', (v) => {
          sum.current += v;
        })
        diceWorldRef.current.on('end', () => {
          setResult(sum.current);
          sum.current = 0;
        })
      } else {
        // 更新骰子数量
        diceWorldRef.current.changeDiceCount(params.numOfDice);
        handleThrow();
      }
    }
    return () => {
      diceWorldRef.current?.dispose();
    }
  }, [canvasEl, params])

  return (
    <div className="h-full">
      <div className='absolute z-10 top-12 bg-white p-4 right-4 w-80 rounded-2xl m-auto'>
        <div>
          <label htmlFor="num">骰子数量：{params.numOfDice}</label>
          <span id="num" className='flex items-center'>
            <label className='mr-4'>1</label>
            <input
              type="range"
              onChange={(e) => {
                const { value } = e.target;
                setParams({
                  ...params,
                  numOfDice: parseInt(value)
                })
              }}
              defaultValue={params.numOfDice}
              min="1"
              max="10"
              className="w-full range range-xs"
              step={1}
            />
            <label className='ml-4'>10</label>
          </span>
        </div>
      </div>
      <div className='absolute z-10 top-40 bg-white p-4 right-4 w-80 rounded-2xl m-auto'>
        <label htmlFor="">点数：{result}</label>
      </div>
      <button onClick={handleThrow} className="p-4 w-20 h-20 z-10 btn btn-circle btn-outline absolute right-10 bottom-10">
        <Image src='/assets/svg/dice.svg' alt='' width={40} height={40} />
      </button>
      <canvas style={{
        width: '100%',
        height: '100%',
      }} ref={ref} className="absolute t-0 l-0 bg-slate-300"></canvas>
    </div>
  )
}

export default Dice;