

module.exports= function (sequelize, Sequelize){
    var Examen_Medico= sequelize.define('examen_medico', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        
        external_id:{
            type:Sequelize.UUID
        },
     
        fecha_envio: {
            type: Sequelize.DATE
        },
        fecha_revicion: {
            type: Sequelize.DATE
        },
        
       razon_envio: {
            type: Sequelize.STRING(100)
        },
        
        resultados: {
            type: Sequelize.STRING(100)
        },
        
        tipo: {
            type: Sequelize.STRING(45)
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
    
    
    return Examen_Medico;
};
