var pool=require('./bd');


        async function ObtenerTI(){
            var query='SELECT * FROM tisys';
            var rows=await pool.query(query);
            return rows;
        }


        async function ObtenerTI1(id){
            try{
            var query='SELECT * FROM tisys WHERE id=?';
            var row=await pool.query(query,[id]);
            return row;
            } catch(error){
                console.log('ocurrió un error');
            }
        }

        async function insertarTema(titulo, cuerpo){
            var query='INSERT INTO tisys (titulo, cuerpo) VALUES (?, ?)';
            var row=await pool.query(query,[titulo,cuerpo]);
            return row;
        }
        module.exports={ObtenerTI, ObtenerTI1, insertarTema};