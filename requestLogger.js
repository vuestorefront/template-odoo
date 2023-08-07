export default function (req, res, next) {
    if(process.env.NODE_ENV !== 'production'){
        console.log('')            
        console.log('----------------------------');
        console.log('----- REQUEST BEGINS. -----');
        console.log('----------------------------');
        console.log('Método:', req.method);
        console.log('URL:', req.url);
        
        const params = req.method === 'GET' ? req.query : req.body;
        console.log('Parâmetros:', params);

        console.log('-------------------------');
        console.log('----- REQUEST ENDS. -----');
        console.log('-------------------------');  
        console.log('')            
    }
    next();
}