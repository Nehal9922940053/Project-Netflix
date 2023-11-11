const { addToLikedMovies, getLikedMovies, removeFromLikedMovies } = require('../controllers/UserController')

const router =require('express').Router()
router.post("/add",addToLikedMovies);
router.get("liked/:email",getLikedMovies);
router.get("/delete",removeFromLikedMovies);
module.exports = router;