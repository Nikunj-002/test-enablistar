import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPayees /*addUser*/ } from "../store";
import PayeesListItem from "./PayeesListItem";
import { useNavigate } from "react-router-dom";

function PayeesList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { data } = useSelector((state) => {
    return state.payees;
  });
  console.log(useSelector((state) => state.payees));

  useEffect(() => {
    setLoading(true);
    dispatch(fetchPayees()) //this will return a promise
      .unwrap()
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [dispatch]);

  let content;
  if (loading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((p) => {
      return <PayeesListItem key={p.id} payee={p} />;
    });
  }

  const addPayeesHandle = () => {
    navigate("/add");
  };

  return (
    <div>
      <div className="button-cont" style={{ textAlign: "right" }}>
        <button onClick={addPayeesHandle}>+ Add New Beneficiary</button>
      </div>
      <table width="100%">{content}</table>
    </div>
  );
}

export default PayeesList;
