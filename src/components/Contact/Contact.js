import { CustomModalForm } from 'components/CustomerModal/CustomerModal';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { ButtonItem, List, ListItem, Text } from './Contact.Styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlerOnClick = id => {
    dispatch(deleteContact(id));
    Notify.success(`Contact deleted`);
  };

  return (
    <List>
      <ListItem>
        <Text>
          {name}: {number}
        </Text>
        <ButtonItem type="button" onClick={() => handlerOnClick(id)}>
          Delete
        </ButtonItem>
        <button type="button" onClick={openModal}>
          Update
        </button>
        {isModalOpen && (
          <CustomModalForm
            isOpen={isModalOpen}
            onClose={closeModal}
            userId={id}
          />
        )}
      </ListItem>
    </List>
  );
};
