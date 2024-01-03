import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.Styled';


const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <List>
      {visibleContacts.map(user => (
        <Contact
          key={user.id}
          id={user.id}
          name={user.name}
          number={user.number}
        />
      ))}
    </List>
  );
};

export default ContactList;
