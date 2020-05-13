const {Router} = require('express');
const {db} = require('./../firebase');

const router = new Router();

//Save a new match
router.post('/', async (req, res) => {
    try{
        let id = generateId(3)
        let date = new Date().toUTCString()
        let newGames = await db.collection('games').doc(id)

        await newGames.set({
            id: newGames.id,
            timeStamp: date,
            contestants: req.body.contestants,
            winner: req.body.winner
        })
        res.send('Db updated')
        }
        catch(err){console.error(err)}
})

//Get an array of all matchObjects
router.get('/', async (req, res) => {
    try{
        let games = [];
        let snapShot = await db.collection('games').get()

        snapShot.forEach(doc => {
            games.push(doc.data());
        })
        res.send({games : games})
    }
    catch(err){console.error(err)}
})

//----------------------------//
function generateId(length){

    let id = '';
    let chars = 'abcdefghijklmnopqrstuvxyz0123456789';

    for(let i= 0; i < length; i++ ){
        let rand = Math.floor(Math.random()*chars.length);
        id += chars[rand];
    }
    return id;
}


module.exports = router;


//en put för varje hamser sen en post , bör lägga på frontend sidan