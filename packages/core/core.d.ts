export interface IndexProps {
  canvas: HTMLCanvasElement;
  options?: IndexOptions;
  drawIndex: () => void;
}

export interface IndexOptions {
  width: number;
  height: number;
  font: string;
  fillStyle: string;
}

export interface SelectedDataType {
  letter: string;
  x: number;
  y: number;
}

export declare class DrawIndex implements IndexProps {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  letterHeight: number;
  on: (type: IndexEvent, cb: (data: SelectedDataType) => void) => void;
  drawIndex: () => void;
  changeTextColor: (color: string, text: string) => void;
  activityWeChatEffectActiveText: (color: string, text: string) => void;
  resetText: (text: string) => void;
  destroy: () => void;
  constructor(
    canvas: HTMLCanvasElement,
    letters: string[],
    options?: Partial<IndexOptions>
  ) {}
}
