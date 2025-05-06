
export const primeLimitCheck = (req,res,next)=>{
    const {num} = req.body;
    if(num>1000){
        res.json({message: 'Number Too Large'})
        console.log('Number Too Large')
    }else{
        next()
    }
}