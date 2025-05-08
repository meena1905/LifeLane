const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let ambulanceLogs = [];

app.post("/log", (req, res) => {
  const data = {
    ...req.body,
    timestamp: new Date().toISOString(),
  };
  ambulanceLogs.push(data);
  console.log("Logged:", data);
  res.json({ message: "Data received", data });
});

app.get("/logs", (req, res) => {
  res.json(ambulanceLogs);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
