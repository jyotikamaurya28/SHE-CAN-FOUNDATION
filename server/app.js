const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

// dummy data
const internData = {
    name: "John Doe",
    referralCode: "johndoe2025",
    totalDonations: 5000
};

app.get("/api/intern", (req, res) => {
    res.json(internData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
