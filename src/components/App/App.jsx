import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { nanoid } from 'nanoid';
import { saveStorage, loadStorage } from '../../js/localStorage';
import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value;
    const number = form.number.value;
    const contacts = this.state.contacts;
    let isInPhonebook = false;
    contacts.map(contact =>
      contact.name === name ? (isInPhonebook = true) : null
    );
    if (isInPhonebook) {
      alert(name + ' is already in contacts');
      return;
    }
    const id = nanoid();
    contacts.push({ id, name, number });
    this.updateContacts(contacts);
    form.reset();
  };

  filter = event => {
    event.preventDefault();
    const filter = event.target.value;
    this.setState({
      filter: filter,
    });
  };

  deleteContact = event => {
    event.preventDefault();
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }
    const id = event.target.parentElement.id;
    const contacts = this.state.contacts;
    contacts.splice(
      contacts.map(obj => (obj.id === id ? contacts.indexOf(obj) : null)),
      1
    );
    this.updateContacts(contacts);
  };

  updateContacts = contacts => {
    this.setState({ contacts });
    saveStorage('contacts', contacts);
  };

  componentDidMount() {
    const contacts = loadStorage('contacts');
    contacts && this.updateContacts(contacts);
  }

  shouldComponentUpdate(nextState) {
    if (this.state.contacts !== nextState.contacts) {
      return true;
    }
    return false;
  }

  render() {
    const contacts = this.state.contacts;
    const filtered = contacts.filter(obj =>
      obj.name.includes(this.state.filter)
    );
    return (
      <div className={styles.appContainer}>
        <h2 className={styles.appHeader}>Phonebook</h2>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2 className={styles.appHeader}>Contacts</h2>
        {this.state.contacts.length > 0 ? (
          <Filter filter={this.filter} />
        ) : null}
        <ContactList contacts={filtered} remove={this.deleteContact} />
      </div>
    );
  }
}
