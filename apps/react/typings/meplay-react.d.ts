import { IndexOptions } from '@meplay/core';
import { ReactNode } from 'react';

export type IndexEffect = 'base' | 'wechat' | 'popup' | 'custom';

export interface IndexProps {
  effect?: IndexEffect;
  duration?: number;
  list: string[];
  indexOptions?: Partial<IndexOptions>;
  activeColor?: string;
  className?: string;
  emphasizeClassName?: string;
}

declare module '@meplay/react' {
  export function CanvasIndex(props: IndexProps): ReactNode;
}
