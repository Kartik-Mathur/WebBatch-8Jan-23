module.exports = (req,res,next)=>{
    console.log(req.session.isLoggedIn);
    console.log(req.session.isLoggedIn == undefined);
    if(req.session.isLoggedIn == undefined) return next();
    res.redirect('/login');
}