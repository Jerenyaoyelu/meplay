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
  constructor(
    canvas: HTMLCanvasElement,
    letters: string[],
    options?: Partial<IndexOptions>
  ) {}
}
