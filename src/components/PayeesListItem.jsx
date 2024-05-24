import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";
import { useState } from "react";
import { GoTrash, GoPencil } from "react-icons/go";
import { useDispatch } from "react-redux";
import { removePayee } from "../store";
import { Link, useNavigate } from "react-router-dom";

function PayeesListItem({ payee }) {
  const [openModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(removePayee(payee));
  };

  const handleEdit = () => {
    navigate(`/edit/${payee.id}`);
  };

  return (
    <>
      <tr>
        <td>
          <Link to={`/details/${payee.id}`}>{payee.name}</Link>
        </td>
        <td>{payee.bank_name}</td>
        <td>{payee.acc_type}</td>
        <td align="right">
          <button onClick={() => setIsOpenModal((a) => !a)}>
            <GoTrash />
          </button>
          <button onClick={handleEdit}>
            <GoPencil />
          </button>
        </td>
      </tr>
      {openModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <ConfirmDelete
            resourceName="Beneficiary"
            onConfirm={() => handleClick()}
            onCloseModal={() => setIsOpenModal(false)}
          />
        </Modal>
      )}
    </>
  );
}

export default PayeesListItem;
