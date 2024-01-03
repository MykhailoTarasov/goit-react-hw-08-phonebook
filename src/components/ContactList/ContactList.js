import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';


const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ul>
      {visibleContacts.map(user => (
        <Contact
          key={user.id}
          id={user.id}
          name={user.name}
          number={user.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
