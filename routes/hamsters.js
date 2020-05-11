const {Router} = require('express');
const {db} = require('./../firebase');

const router = new Router();

router.get('/', async (req, res) => {

    let hamsters = [];
    let snapShot = await db.collection('hamsters').get()

    snapShot.forEach(doc => {
        hamsters.push(doc.data());
    })

    res.send({hamsters : hamsters})
})

module.exports = router;