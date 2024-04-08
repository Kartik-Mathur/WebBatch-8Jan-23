module.exports = function isLoggedIn(req,res,next){  
    let loggedIn = true;
    if(loggedIn === false) return res.send("Login First");
    next();
}