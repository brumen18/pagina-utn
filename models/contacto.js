var pool=require('./bd');


        async function ObtenerContacto(){
            var query='SELECT * FROM contacto ORDER BY id DESC';
            var rows=await pool.query(query);
            return rows;
        }

        async function insertarConsulta (nombre, apellidos, correo, mensaje) {
            var query='INSERT INTO contacto (nombre, apellidos, correo, mensaje) VALUES (?, ?, ?, ?)';
            var rows=await pool.query(query,[nombre,apellidos,correo,mensaje]);
            return rows;
        }

        async function eliminarContacto(id){
            var query='DELETE FROM contacto WHERE id=?';
            var row=await pool.query(query,[id]);
            return row;
        }

        async function actualizarContacto(nombre, apellidos, correo, mensaje, id){
            var query='UPDATE contacto SET nombre=?, apellidos=?, correo=?, mensaje=? WHERE id=?';
            var rows=await pool.query(query,[nombre,apellidos,correo,mensaje,id]);
            return rows;
        }


        module.exports={ObtenerContacto, eliminarContacto, actualizarContacto, insertarConsulta};