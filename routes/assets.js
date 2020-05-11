//assets ska serva bilder
const { Router } = require("express");
const router = new Router();
const { auth, db } = require("./../firebase");
const fs = require("fs");

router.get("/", async (req, res) => {
    let images = [];

    let snapShot = await db.collection('hamsters').get();

    snapShot.forEach(doc => {
        images.push(doc.data().imgName);
    })
    
})

module.exports = router;