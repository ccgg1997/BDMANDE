const {Router}= require('express');
const router = Router();
const _ =require('underscore');

const {getUsers,editUsers}= require('../controller/index.controlle');



//console.log(movies);



router.get('/',getUsers);

router.post('/',(req,res)=>{
    const{title,director,year, rating}= req.body;
    if(title && director && year && rating){
        const id=movies.length+1;
        const newmovie= {...req.body, id};
        console.log(newmovie);
        movies.push(newmovie);
        res.json(movies);
    }else{ 
        res.status(500).json({error:'wrong request'});
    }
});

router.delete('/:id',(req,res)=>{
    const {id}= req.params;
    _.each(movies, (movie,i)=>{
        if(movie.id==id){
            movies.splice(i,1)
        }

    });
    res.send(movies);

}); 

router.put('/:id', (req,res)=>{
    const{id}=req.params;
    const{title, director,year, rating} = req.body;
    if(title && director && year && rating){
        _.each(movies, (movie,i)=>{
            if(movie.id==id){
                console.log(movie.id);
                movie.title=title;
                movie.director=director;
                movie.year=year;
                movie.rating=rating;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error:'error en la actualizacion'});
    }  
});


module.exports= router;