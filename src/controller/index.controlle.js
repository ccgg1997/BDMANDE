const {Pool}= require('pg');

//import json example
const movies= require('../sample.json');

//database conection
const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'mande',
    password: '1234',
    port: 5432
};

const pool= new Pool(config);

const getUsers = async(req,res) => {
    try{
        const rest= await pool.query('SELECT * from usuarios');
        console.log(rest.rows);
        res.send(rest.rows.concat(movies));
    }
    catch(e){
        console.log(e);
    }  
}

const editUsers = async(req,res) => {
    const text= 'update usuarios set nombrre=$1, celular=$2 where nombrre=$3';
    const values= ['jose','1234','cristian'];
    try{
        const rest= await pool.query(text,values);
        console.log();
        pool.end();
    }
    catch(e){
        console.log(e);
    }   
}

module.exports = { getUsers, editUsers };