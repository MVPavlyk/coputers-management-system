import React from 'react';

import css from './Header.module.css'
import { Link } from 'react-router-dom';
import { homeRoute } from '../../config/constants';

const Header = () => {
  return (
    <div className={css.header}>
      <Link className={css.header__link} to={`/${homeRoute}`}>
        Home
      </Link>
      <Link className={css.header__link} to={`${homeRoute}/computers`}>
        Computers
      </Link>
      <Link className={css.header__link} to={`${homeRoute}/components`}>
        Components
      </Link>
    </div>
  );
};

export { Header };
