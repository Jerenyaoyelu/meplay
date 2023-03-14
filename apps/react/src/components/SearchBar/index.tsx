import * as React from 'react';
import styles from './index.module.less';
import { addListener } from '@contact/utils';
import { IconSvg } from '@/components/IconSvg';

interface CSearchBarProp {
  onChange?: (v?: string) => void;
  onSearch?: (v?: string) => void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  placeholder?: string;
  value?: string;
}

export const CrSearchBar: React.FC<CSearchBarProp> = ({ value, placeholder, onChange, onSearch, prefix, suffix }) => {
  const [searchIns, setSearchIns] = React.useState<HTMLInputElement | null>(null);
  const searchRef = React.useCallback((node: HTMLInputElement) => {
    if (node) {
      setSearchIns(node);
    }
  }, []);
  const instance = React.useRef(null);
  const dispose = React.useRef<any>(null);

  React.useEffect(() => {
    return () => {
      dispose.current?.();
    }
  }, [])

  React.useEffect(() => {
    if (searchIns) {
      dispose.current = addListener('keydown', (e: any) => {
        if (e.key === 'Enter') {
          onSearch?.();
        }
      }, searchIns)
    }
  }, [searchIns])

  return (
    <div ref={searchRef} className={styles['cr-search-bar']}>
      <div ref={instance} className={styles['cr-prefix']}>
        {prefix || (
          <IconSvg
            size={16}
            name="search"
            url='//at.alicdn.com/t/c/font_3949975_a2mlrx6qzwm.js'
          />
        )}
      </div>
      <input
        placeholder={placeholder || '请输入关键字'}
        className={styles['cr-search-input']}
        onChange={(e) => {
          onChange?.(e?.target?.value);
        }}
        value={value}
        type="text"
      />
      {
        suffix && (
          <div className={styles['cr-suffix']}>
            {suffix}
          </div>
        )
      }
    </div>
  )
}