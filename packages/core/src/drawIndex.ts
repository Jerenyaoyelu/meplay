import { IndexOptions, SelectedDataType } from './types';

export interface IndexProps {
  canvas: HTMLCanvasElement;
  options?: IndexOptions;
  drawIndex: () => void;
}

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

  private _letterHeight: number = 1;

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
    (this._ctx as CanvasRenderingContext2D).fillStyle = '#fff'; // 画布背景颜色
    this._letterHeight = 20;
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
    });
  }

  destroy() {
    this._listenersDisposes.forEach((rm) => {
      if (rm instanceof Function) {
        rm();
      }
    });
  }
}
