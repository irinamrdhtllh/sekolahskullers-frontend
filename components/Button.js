import React from 'react';

import Link from 'next/link';

import styles from '../styles/components/Button.module.scss';

const Button = React.forwardRef(({ onClick, href, name }, ref) => {
  return (
    <div className={styles.button}>
      <Link href={href} passHref>
        <a className={styles.link} onClick={onClick} ref={ref}>
          {name}
        </a>
      </Link>
    </div>
  );
});

Button.displayName = 'Button';

export default Button;
