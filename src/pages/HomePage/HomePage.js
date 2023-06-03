import React from 'react';

import css from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { homeRoute } from '../../config/constants';

const HomePage = () => {
  return (
    <div className={css.home__page}>
      <div className={css.home__block}>
        <p className={css.home__text}>Welcome to the management system for computers and their components. To get
          started, go to the "Computers" or
          "Components" tab
        </p>

        <Link to={`/${homeRoute}/computers`} className={css.header__link}>Computers</Link>
        <Link to={`/${homeRoute}/components`} className={css.header__link}>Components</Link>
      </div>
    </div>
  );
};

export { HomePage };
