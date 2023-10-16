import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export class Filter extends Component {
  render() {
    const { filter } = this.props;
    return (
      <>
        <h4 className={styles.filterHeader}>Find contacts by name:</h4>
        <input className={styles.filterInput} type="text" onChange={filter} />
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.func,
};
