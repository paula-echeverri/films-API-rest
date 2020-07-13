module.exports=(squelize, type)=>{

    return squelize.define('film',{

        id: {

            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true

        },

        title:type.STRING,
        description:type.STRING,
        score:type.INTEGER,
        director:type.STRING


    })

}