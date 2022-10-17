import { connect } from "../database"

export const authUser = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const db = await connect()
    const [rows] = await db.query('select * from users where correo = "' + req.params.user + '"')
    if (rows.length > 0 && req.params.pass == rows[0].password && req.params.user == rows[0].correo){
        console.log('autenticado')
        rows.push(true)
        res.send(rows)
    }else{
        rows.push(false)
        res.send(rows)
        console.log('nope') 
    }
}