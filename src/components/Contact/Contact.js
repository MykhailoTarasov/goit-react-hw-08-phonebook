import { CustomModalForm } from 'components/CustomerModal/CustomerModal';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  ButtonBox,
  ButtonItem,
  DeleteIcon,
  ListItem,
  Text,
  UpdateIcon,
} from './Contact.Styled';

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
    <ListItem>
      <Text>
        {name}: {number}
      </Text>
      <ButtonBox>
        <ButtonItem type="button" onClick={() => handlerOnClick(id)}>
          <DeleteIcon />
        </ButtonItem>
        <ButtonItem type="button" onClick={openModal}>
          <UpdateIcon />
        </ButtonItem>
      </ButtonBox>
      {isModalOpen && (
        <CustomModalForm
          isOpen={isModalOpen}
          onClose={closeModal}
          userId={id}
        />
      )}
    </ListItem>
  );
};
