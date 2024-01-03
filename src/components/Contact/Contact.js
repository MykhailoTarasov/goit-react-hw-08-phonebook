import { CustomModalForm } from "components/CustomerModal/CustomerModal";
import { Notify } from "notiflix";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";

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
      <li>
        <span>
          {name}: {number}
        </span>
        <button type="button" onClick={() => handlerOnClick(id)}>
          Delete
        </button>
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
      </li>
    );
  };