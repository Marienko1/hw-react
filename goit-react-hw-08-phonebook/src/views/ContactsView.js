import React, { Component } from "react";
import { connect } from "react-redux";
import contactsSelectors from "../redux/contacts/contactsSelectors";
import contactsOperations from "../redux/contacts/contactsOperations";
import ContactForm from "../components/ContactForm";
import { Logo } from "../components/Logo";
import Filter from "../Filter";
import ContactList from "../components/ContactList";
import Loader from "react-loader-spinner";

class ContactsView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <div className="Wrapper">
        <Logo />
        <ContactForm />
        {contacts && contacts.length > 1 && <Filter />}
        <h2 className="Title">Contacts</h2>

        {this.props.isLoadingContacts && (
          <Loader type="Hearts" color="pink" height={80} width={80} />
        )}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContact(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
