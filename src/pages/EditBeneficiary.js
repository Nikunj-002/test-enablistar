import { useState, useEffect } from "react";
import BeneficiaryForm from "../components/BeneficiaryForm";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditPage() {

  const [record, setRecord] = useState(null);
  
  const params = useParams();

  useEffect(() => {
    // React advises to declare the async function directly inside useEffect
    async function getPayee() {
      const response = await axios.get(
        `http://localhost:3005/payees/${params.pid}`
      );

      setRecord(response.data);
    }

    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual

      getPayee();

  }, [params, record]);

  if (!record) {
    return <p>No Beneficiary found!</p>;
  }

  return (
    <>
      <BeneficiaryForm beneficiaryToEdit={record} />
    </>
  );
}

export default EditPage;
