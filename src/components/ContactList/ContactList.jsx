import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    const { remove } = this.props;
    return (
      <ul className={styles.contactList} onClick={remove}>
        {contacts.map(contact => (
          <li className={styles.contactItem} key={contact.id} id={contact.id}>
            <span className={styles.contactName}>{contact.name}:</span>
            <span className={styles.contactNumber}>{contact.number}</span>
            <button className={styles.contactButton} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  remove: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
