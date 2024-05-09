module.exports.isAdmin = (req,res,next)=>{
    if(req.isAuthenticated() && req.user.role === 'admin'){
        next();
    }else{
        return res.status(401).json({msg:'Not Authorized'});
    }
}