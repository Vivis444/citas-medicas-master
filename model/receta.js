module.exports= function (sequelize, Sequelize){
    var Receta= sequelize.define('receta', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        
        external_id:{
            type:Sequelize.UUID
        },
     
        medicamento: {
            type: Sequelize.STRING(75)
        },
        dosis: {
            type: Sequelize.STRING(45)
        },
        horario: {
            type: Sequelize.STRING(45)
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
    
    
    return Receta;
};

