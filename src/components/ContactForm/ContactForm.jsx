import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    handleSubmit: this.props.handleSubmit,
  };
  render() {
    return (
      <>
        <form onSubmit={this.state.handleSubmit} className={styles.contactForm}>
          <label name="name" className={styles.contactLabel}>
            Name
          </label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={styles.contactInput}
          />
          <label name="number" className={styles.contactLabel}>
            Phone
          </label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={styles.contactInput}
          />
          <button type="submit" className={styles.contactButton}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
