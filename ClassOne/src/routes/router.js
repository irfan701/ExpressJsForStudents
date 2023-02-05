const express=require('express')
const router = express.Router()

router.get('/r1', function (req, res) {
    res.send('Router Page 1')
})
router.get('/r2', function (req, res) {
    res.send('Router Page 2')
})

router.get('/mid/:login', function (req, res,next) {
    //processing.....

var login=req.params.login


    if(login){
        res.send("Login Sucees")
        next();
    }else{
        res.send('Authorization Failed')
    }

})

// export default router

module.exports=router;

