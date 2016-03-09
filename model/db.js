/**
 * Created by Administrator on 2016/3/9.
 */
var Sequelize=require('sequelize');
var dbconfig=require('./dbconfig');
module.exports=new Sequelize(dbconfig.database,dbconfig.user,dbconfig.password,{
    host:dbconfig.host,
    dialect:'mysql',
    port:dbconfig.port,
    pool:{
        max:5,
        min:0,
        idle:10000
    },
    timezone:'+08:00'
});