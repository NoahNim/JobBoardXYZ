import React, { useState } from "react";
import db from "./firebase";
import { doc, setDoc } from "firebase/firestore";

function App() {
  const [customerName, setCustomerName] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "customerData", "customers"), {
      name: customerName,
      password: customerPassword,
    });

    setCustomerName("");
    setCustomerPassword("");
  };

  return (
    <div className="App">
      <div className="App__form">
        <input
          type="text"
          placeholder="Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={customerPassword}
          onChange={(e) => setCustomerPassword(e.target.value)}
        />
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
