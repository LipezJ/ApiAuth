import { connect } from "../database";

export const authUser = async (req, res) => {
  const db = await connect();
  if (req.params.user.length) {
    const [rows] = await db.query(
      'select * from users where correo = "' + req.params.user + '"'
    );
    if (
      rows.length > 0 &&
      req.params.pass == rows[0].password &&
      req.params.user == rows[0].correo
    ) {
      rows.push(true);
      res.send(rows);
    } else {
      rows.push(false);
      res.send(rows);
    }
  }
};
