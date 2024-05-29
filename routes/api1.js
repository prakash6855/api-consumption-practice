const express = require("express");
const axios = require("axios");
const router = express.Router();
// Function to convert price string to a number for comparison
const parsePrice = (price) => parseFloat(price.replace("$", ""));
router.get("/sortPriceAscending", async (req, res) => {
  try {
    const response = await axios.get("https://api.sampleapis.com/beers/ale");
    const beers = response.data;

    // Sort beers by price
    beers.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));

    res.json(beers);
  } catch (error) {
    res.status(500).json({ error: "Failed to get response" });
  }
});
module.exports = router;
