/**
 * Created by Administrator on 2016/3/9.
 */
var db=require('../model/Menu');
exports.all=function(req,res){
    db.findAll().then(function(e){
        res.render('index',{
          index:e
        })
    });
};