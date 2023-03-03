const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    const authHeader = req.headers.token
    if(authHeader){
       const token = authHeader.split(" ")[1]; 
       jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
          if(err) res.status(403).json("Invalid Token");
          req.user = user;
          next();
       });
    }else{
        return res.status(401).json("You are not authenticated");
    }
};

const verifyTokenAuthorization = (req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
           next();
        }else{
            res.status(403).json("Access denied");
        }
    });
};

const verifyTokenAdmin = (req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    verifyToken(req, res, ()=>{
        if( req.user.isAdmin){
           next();
        }else{
            res.status(403).json("Access denied");
        }
    });
};

module.exports = { verifyToken, verifyTokenAuthorization, verifyTokenAdmin };