import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [claimType, setClaimType] = useState("");

  const submitClaim = async () => {
    await fetch("http://localhost:5000/api/claims", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName: name,
        claimType: claimType
      })
    });
    alert("Claim submitted successfully");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>InsureVista – Insurance Portal</h2>

      <input
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Claim Type (Health / Vehicle)"
        value={claimType}
        onChange={(e) => setClaimType(e.target.value)}
      />
      <br /><br />

      <button onClick={submitClaim}>Submit Claim</button>
    </div>
  );
}

export default App;
