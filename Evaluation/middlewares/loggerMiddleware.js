
export const loggerMiddleware = (req, res, next) =>{
    console.log(req.url, req.method)
    next()
}