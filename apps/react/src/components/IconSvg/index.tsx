import { useEffect } from 'react';
import styles from './index.module.less';

interface IconProp {
  name: string;
  url: string;
  size?: number;
}

export const IconSvg: React.FC<IconProp> = ({ size, url, name }) => {
  let control = true;

  useEffect(() => {
    let script: HTMLScriptElement | null = null;
    if (control) {
      control = false;
      script = document.createElement('script');
      script.src = url;
      document.body.appendChild(script);
    }
    return () => {
      if (script) {
        document.body.removeChild(script);
      }

    }
  }, [])

  return (
    <svg
      className={styles.iconSvg}
      aria-hidden={true}
      width={size || 14}
      height={size || 14}
    >
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}