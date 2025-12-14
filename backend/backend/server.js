const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let claims = [];
let policies = [];

// Submit a claim
app.post("/api/claims", (req, res) => {
  const claim = {
    id: claims.length + 1,
    customerName: req.body.customerName,
    claimType: req.body.claimType,
    status: "Submitted"
  };
  claims.push(claim);
  res.json({ message: "Claim submitted successfully", claim });
});

// View all claims
app.get("/api/claims", (req, res) => {
  res.json(claims);
});

// Create a policy
app.post("/api/policies", (req, res) => {
  const policy = {
    id: policies.length + 1,
    customerName: req.body.customerName,
    policyType: req.body.policyType,
    premiumAmount: req.body.premiumAmount,
    status: "Active"
  };
  policies.push(policy);
  res.json({ message: "Policy created successfully", policy });
});

// View all policies
app.get("/api/policies", (req, res) => {
  res.json(policies);
});

app.listen(5000, () => {
  console.log("InsureVista backend running at http://localhost:5000");
});
