import React from "react";
import PayeesList from "../components/PayeesList";

function HomePage() {
  return (
    <>
      <section className='main-content'>
        <h1>Manage Beneficiaries</h1>
        <PayeesList />
      </section>
    </>
  );
}

export default HomePage;
