import React from 'react';

import Link from 'next/link';

import styles from '../styles/components/Button.module.scss';

const Button = React.forwardRef(({ onClick, href, name, width }, ref) => {
  return (
    <Link href={href} passHref>
      <a
        style={
          width && { width: `${width}`, paddingLeft: '0', paddingRight: '0' }
        }
        className={styles.button}
        onClick={onClick}
        ref={ref}
      >
        {name}
      </a>
    </Link>
  );
});

Button.displayName = 'Button';

export default Button;
