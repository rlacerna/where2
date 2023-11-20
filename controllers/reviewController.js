const express = require("express");
const Review = require("../models/review"); // Adjust the path as needed
const router = express.Router();

// INDEX
router.get("/", async (req, res) => {
    try {
        res.json(await Review.find());
    } catch (error) {
        res.status(400).json(error);
    }
});

// CREATE
router.post("/", async (req, res) => {
    try {
        res.json(await Review.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});

// SHOW
router.get("/:id", async (req, res) => {
    try {
        res.json(await Review.findById(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        res.json(await Review.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        res.json(await Review.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
