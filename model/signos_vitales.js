module.exports= function (sequelize, Sequelize){
    var Signos_Vitales= sequelize.define('signos_vitales', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        
        external_id:{
            type:Sequelize.UUID
        },
     
        peso: {
            type: Sequelize.DOUBLE(7,2)
        },
        altura: {
            type: Sequelize.DOUBLE(7,2)
        },
        
       temperatura: {
            type: Sequelize.STRING(25)
        },
        
        precion_arterial: {
            type: Sequelize.STRING(25)
        },
        
        pulso: {
            type: Sequelize.STRING(25)
        },
        frecuencia_respiratoria: {
            type: Sequelize.STRING(25)
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
    
    
    return Signos_Vitales;
};

