
/* GET home page. */
module.exports=function(app,db){
    app.get('/',db.all)



} ;
