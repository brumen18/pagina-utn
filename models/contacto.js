var pool=require('./bd');


        async function ObtenerContacto(){
            var query='SELECT * FROM contacto';
            var rows=await pool.query(query);
            return rows;
        }

        async function eliminarContacto(id){
            var query='DELETE FROM contacto WHERE id=?';
            var row=await pool.query(query,[id]);
            return row;
        }

        async function actualizarContacto(nombre, correo, mensaje, id){
            var query='UPDATE contacto SET nombre=?, correo=?, mensaje=? WHERE id=?';
            var rows=await pool.query(query,[nombre,correo,mensaje,id]);
            return rows;
        }


        module.exports={ObtenerContacto, eliminarContacto, actualizarContacto};