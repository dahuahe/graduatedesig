var Sequelize = require('sequelize');
var db=require('./db');
var Caidan=db.define('Caidan',{
    Id:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true},
    TreeId:{type:Sequelize.INTEGER},
    DisplayName:{type:Sequelize.STRING},
    Order:{type:Sequelize.INTEGER}
}, {tableName:'BG_Caidan'});
db.sync();