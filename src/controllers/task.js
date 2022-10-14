import { connect } from "../database"

export const authUser = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query('select * from users where correo = "' + req.params.user + '"')
    if (req.params.pass == rows[0].password && req.params.user == rows[0].correo){
        console.log('autenticado')
        res.send(rows[0])
    }else{
        res.send([])
    }
}