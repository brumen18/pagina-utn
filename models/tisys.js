var pool=require('./bd');


        async function ObtenerTI(){
            var query='SELECT * FROM tisys';
            var rows=await pool.query(query);
            return rows;
        }


        module.exports={ObtenerTI};