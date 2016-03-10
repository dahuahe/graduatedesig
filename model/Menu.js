var Sequelize = require('sequelize');
var db=require('./db');
//定义菜单类
var Menu=db.define('Menu',{
    Id:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true},
    TreeId:{type:Sequelize.INTEGER},
    DisplayName:{type:Sequelize.STRING},
    Order:{type:Sequelize.INTEGER}
}, {tableName:'BG_Menu'});
//定义角色类
var Role=db.define('Role',{
    Id:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true},
    RoleName:{type:Sequelize.STRING,unique:true}
},{tableName:'BG_Role'});

//定义用户类
var User=db.define('User',{
    Id:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true},
    UserName:{type:Sequelize.STRING,unique:true},
    Password:{type:Sequelize.STRING},
    Email:{type:Sequelize.STRING}
},{tableName:'BG_User'});//在表中建立角色外键

//定义角色对应模块类
var RoleToMenu=db.define('RoleToMenu',{
    Id:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true}
},{tableName:'BG_RoleToMenu'});
User.belongsTo(Role);
Menu.belongsToMany(Role,{through:'BG_RoleToMenu'});
Role.belongsToMany(Menu,{through:'BG_RoleToMenu'});
//Role.findAndCountAll({include:[{model:Menu}]}).then(function(e){console.log(e.rows[0].length)})
db.sync({force:true});
exports.Menu=Menu;
exports.Role=Role;
exports.User=User;