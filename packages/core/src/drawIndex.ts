import { IndexProps, IndexOptions, SelectedDataType } from '../core';

type IndexEvent = 'onselect';

export class DrawIndex implements IndexProps {
  private _canvas: HTMLCanvasElement | null = null;

  private _letters: string[] = [];

  private _ctx: CanvasRenderingContext2D | null = null;

  private _options: IndexOptions = {
    width: 50,
    height: 300,
    font: 'bold 14px Arial',
    fillStyle: '#000',
  };

  private _listeners: ((data?: SelectedDataType) => void)[] = [];

  private _down: boolean = false;

  private _listenersDisposes: (() => void)[] = [];

  private _letterHeight: number = 20;

  private _letterMap: { [propName: string]: [number, number] } = {};

  constructor(
    canvas: HTMLCanvasElement,
    letters: string[],
    options?: Partial<IndexOptions>
  ) {
    this._canvas = canvas;
    this._letters = letters;
    this._options = {
      ...this._options,
      ...(options || {}),
    };
    this._init();
  }

  get canvas(): HTMLCanvasElement {
    return this._canvas as HTMLCanvasElement;
  }

  get ctx() {
    return this._ctx;
  }

  get letterHeight() {
    return this._letterHeight;
  }

  private _init() {
    if (!this._canvas) return;
    const downHandler = (event: PointerEvent) => {
      if (!this._down) {
        this._down = true;
        this._compute(event);
      }
    };
    this._canvas.addEventListener('pointerdown', downHandler);
    this._listenersDisposes.push(() => {
      this._canvas?.removeEventListener('pointerdown', downHandler);
    });
    const moveHandler = (event: PointerEvent) => {
      this._compute(event);
    };
    this._canvas.addEventListener('pointermove', moveHandler);
    this._listenersDisposes.push(() => {
      this._canvas?.removeEventListener('pointermove', moveHandler);
    });

    const upHandler = () => {
      if (this._down) {
        this._down = false;
      }
    };
    this._canvas.addEventListener('pointerup', upHandler);
    this._listenersDisposes.push(() => {
      this._canvas?.removeEventListener('pointerup', upHandler);
    });
  }

  on(type: IndexEvent, cb: (data?: SelectedDataType) => void) {
    if (type === 'onselect') {
      this._listeners.push(cb);
    }
  }

  private _compute(event: PointerEvent) {
    if (this._down && this._canvas) {
      const rect = this._canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const letterIndex = Math.floor(y / this._letterHeight);
      const letter = this._letters[letterIndex];
      this._listeners.forEach((cb) => {
        if (cb instanceof Function) {
          const t: SelectedDataType = {
            letter,
            x,
            y: ((letterIndex + letterIndex + 1) * this._letterHeight) / 2,
          };
          cb(t);
        }
      });
    }
  }

  drawIndex() {
    if (!this._canvas) {
      throw new Error('canvas不存在');
    }
    const width = this._options.width;
    const height = this._letters.length * 20;
    // const height = this._options.height;
    this._canvas.setAttribute('width', width + 'px');
    this._canvas.setAttribute('height', height + 'px');
    this._ctx = this._canvas?.getContext('2d');
    (this._ctx as CanvasRenderingContext2D).textBaseline = 'middle';
    (this._ctx as CanvasRenderingContext2D).fillStyle = '#fff'; // 画布背景颜色
    (this._ctx as CanvasRenderingContext2D).font = this._options.font as string;
    (this._ctx as CanvasRenderingContext2D).fillRect(0, 0, width, height);
    // 打印的字母颜色，注意不能放到fillRect之前，否则会被当成填充整个区域的颜色
    (this._ctx as CanvasRenderingContext2D).fillStyle = this._options
      ?.fillStyle as string;
    this._letters.forEach((letter, i) => {
      const x =
        (width -
          (this._ctx as CanvasRenderingContext2D)?.measureText(letter).width) /
        2;
      const y = this._letterHeight * i + this._letterHeight / 2;
      this._ctx?.fillText(letter, x, y);
      // 这里的x，y是middle基线
      this._letterMap[letter] = [x, y];
    });
    console.log('ppp', this._letterMap);
  }

  changeTextColor(color: string, text: string) {
    console.log('oooo', color, text, this._letterMap);

    const [x, y] = this._letterMap[text];
    const left = x;
    const top = y - this._letterHeight / 2;
    const width = (this._ctx as CanvasRenderingContext2D)?.measureText(
      text
    ).width;
    this._ctx?.clearRect(left, top, width, this._letterHeight);
    (this._ctx as CanvasRenderingContext2D).fillStyle = color;
    this._ctx?.beginPath();
    this._ctx?.fillText(text, x, y);
  }

  activityWeChatEffectActiveText(color: string, text: string) {
    const [x, y] = this._letterMap[text];
    const left = x;
    const top = y - this._letterHeight / 2;
    const width = (this._ctx as CanvasRenderingContext2D)?.measureText(
      text
    ).width;
    this._ctx?.clearRect(left, top, width, this._letterHeight);
    (this._ctx as CanvasRenderingContext2D).fillStyle = color;
    this._ctx?.beginPath();
    this._ctx?.arc(x + width / 2, y, this._letterHeight / 2, 0, 2 * Math.PI);
    this._ctx?.fill();
    this._ctx?.closePath();
    (this._ctx as CanvasRenderingContext2D).fillStyle = '#fff';
    this._ctx?.beginPath();
    this._ctx?.fillText(text, x, y);
  }

  resetText(text: string) {
    if (!text) return;
    const [x, y] = this._letterMap?.[text];
    const width = (this._ctx as CanvasRenderingContext2D)?.measureText(
      text
    ).width;
    const left = x + width / 2 - this._letterHeight / 2;
    const top = y - this._letterHeight / 2;
    this._ctx?.clearRect(left, top, this._letterHeight, this._letterHeight);
    (this._ctx as CanvasRenderingContext2D).fillStyle = this._options.fillStyle;
    this._ctx?.beginPath();
    this._ctx?.fillText(text, x, y);
  }

  destroy() {
    this._listenersDisposes.forEach((rm) => {
      if (rm instanceof Function) {
        rm();
      }
    });
  }
}
