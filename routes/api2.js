const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/filterAverageRatingAbove4.5", async (req, res) => {
  try {
    const response = await axios.get("https://api.sampleapis.com/beers/ale");
    const beers = response.data;

    // Sort beers by price
    const result = beers.filter((item) => {
      return item.rating.average > 4.5;
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to get response" });
  }
});
module.exports = router;
