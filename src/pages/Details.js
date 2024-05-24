import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailsPage() {
  const [record, setRecord] = useState(null);

  const params = useParams();

  useEffect(() => {
    // React advises to declare the async function directly inside useEffect
    async function getPayee() {
      const response = await axios.get(
        `http://localhost:3005/payees/${params.bid}`
      );

      setRecord(response.data);
    }

    getPayee();
  }, [params, record]);

  if (!record) {
    return <p>No Beneficiary found!</p>;
  }

  return (
    <>
      <section className="main-content">
        <h1>Beneficiary Details</h1>
        <p>Name: {record.name}</p>
        <p>Bank Name: {record.bank_name}</p>
        <p>Account Number: {record.acc_no}</p>
        <p>Account Type: {record.acc_type}</p> 
      </section>
    </>
  );
}

export default DetailsPage;
