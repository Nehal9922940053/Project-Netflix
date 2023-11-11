const User = require('../models/UserModel');

module.exports.addToLikedMovies = async(req,res)=>{
    try{
            const {email,data} = req.body;
            const user = await User.findOne({email});
            if(user){
               const{likedMovies} = user;
               const moviesAlreadyLiked = likedMovies.find(({id})=>(id === data.id));   
               const movieIndex = likedMovies.findIndex(({id})=>(id === data.id));
               



               if(!moviesAlreadyLiked){
                   await User.findByIdAndUpdate(
                    user._id,
                    {
                        likedMovies
                    },
                    {new:true}
                   )
               }    else return res.json({msg :"Movies already added to  the liked list"})      
            } else await User.create({email,likedMovies:[data]});
            return res.json({msg:"Movie added Successfully"});
        }catch(err){
           return res.json({msg:"Error adding the movie"});
        }
}


module.exports.getLikedMovies = async(req,res)=>{
    try{
        const {email} = req.params;
        const user = await User.findOne({email});
        if(user){
            return res.json({msg:"success",movies:user.likedMovies});
        } 
        else return res.json({msg:"User with the given email is not found"});
    }
    catch(err){
        return res.json({msg:"Error fetching the  movie"});
    }
}


module.exports.removeFromLikedMovies = async (req,res)=>{
    try{
        const {email,movieID} = req.body;
            const user = await User.findOne({email});
            if(user){
               const{likedMovies} = user;
               const movieIndex = likedMovies.findIndex(({id})=>(id === movieID))
               const moviesAlreadyLiked = likedMovies.find(({id})=>(id === data.id));   
              
               if(!movieIndex) res.status(400).send({msg:"Movie not found"})
               likedMovies.splice(movieIndex,1);
                   await User.findByIdAndUpdate(
                    user._id,
                    {
                        likedMovies
                    },
                    {new:true}
                   ) 
                   return res.json({msg:"Movie Deleted",movies:likedMovies});
                }
           
    }
    catch(error){
        return res.json({msg:"Error removing the movie"});
    }
}