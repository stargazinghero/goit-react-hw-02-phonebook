import PropTypes from 'prop-types';
import {
  Button,
  ContactItemText,
  ContactListContainer,
  ContactListItem,
} from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListContainer>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id}>
            <ContactItemText>
              {name}: {number}
            </ContactItemText>
            <Button type="button" onClick={() => deleteContact(id)}>
              Delete
            </Button>
          </ContactListItem>
        );
      })}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
