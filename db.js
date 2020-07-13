const Squelize=require('sequelize');

const FilmModel=require('./models/films');

const UserModel=require('./models/users');

const squelize= new Squelize('0F0dAS5Xs3', '0F0dAS5Xs3','BShnIR9gIJ',{

    host:'remotemysql.com',
    dialect:'mysql'


});

const Film=FilmModel(squelize, Squelize);


const User=UserModel(squelize, Squelize);

squelize.sync({force:false}).then (()=>{

    console.log('tablas sincronizadas');

})

module.exports={
    Film,
    User
}