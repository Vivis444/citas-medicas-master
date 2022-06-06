module.exports= function (sequelize, Sequelize){
    var Medico= sequelize.define('medico', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        
        external_id:{
            type:Sequelize.UUID
        },
     
        especializacion: {
            type: Sequelize.STRING(100)
        },
        hospitales: {
            type: Sequelize.STRING(100)
        },
        fecha_ingreso: {
            type: Sequelize.DATE
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
    
    
    return Medico;
};

