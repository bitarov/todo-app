import React from 'react';
import PropTypes from 'prop-types';

import './footer.css';

import { FILTERS_BTN } from '../../constants';

const Footer = ({ amount, activeFilter, changeFilter }) => (
  <div className="footer">
    <span className="amount">{`${amount} Tasks left`}</span>
    <div className="btn-group">
      {FILTERS_BTN.map(({ text, id }) => (
        <button
          key={id}
          className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
          onClick={() => changeFilter(id)}
        >
          {text}
        </button>
      ))}
    </div>
  </div>
);

Footer.propTypes = {
  amount: PropTypes.number,
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func,
}

Footer.defaultProps = {
  amount: 0,
  activeFilter: 'all',
  changeFilter: () => {},
}

export default Footer;