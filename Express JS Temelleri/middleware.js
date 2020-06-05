const accessControl = (req, res, next) => {
    console.log("Middleware: Access Control");
    // Eğer next komutu kullanılmazsa request burada kalır
    // next();

    
    const access = true;
    if (!access) {
        // res.json({
        //     success: false,
        //     message: "You are not authorized"
        // })
        
        // Eğer statüs olarak giriş yapılmadığı için 200 yerine 401 göndermek istersek
        res.status(401).json({
                success: false,
                message: "You are not authorized"
            })
    }
    next();
};

const defaultMiddleware = (req,res,next) => {
    console.log("Default Middleware");
    next();
}


module.exports= {
    accessControl,
    defaultMiddleware
}