import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './tab.module.scss'

class Tab extends Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
      const {
        onClick,
        props: {
          activeTab,
          label,
        },
      } = this;
  
      let className='';
  
      if (activeTab === label) {
        className += 'Active';
      }
  
      return (
        <li
          className={styles.item + className}
          onClick={onClick}
        >
          {label}
        </li>
      );
    }
  }
  
  export default Tab;