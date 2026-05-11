const db=require("../config/db");


async function createUser(username,email,passwordHash){
    const query="INSERT INTO users (username,email,passwordHash) values (?,?,?)"
    const [result] = await db.execute(query, [username, email, passwordHash]);
    return result;
}

async function getUserData(usrnm_email) {
    if(usrnm_email==null){return null;}
    const query = "SELECT * FROM users WHERE email = ? OR username = ? LIMIT 1";
    const [rows] = await db.execute(query, [usrnm_email, usrnm_email]);
    return rows.length ? rows[0] : null;
}
async function getUsernameById(id) {
    if(id==null){return null;}
    const query = "SELECT username FROM users WHERE userId = ? LIMIT 1";
    const [rows] = await db.execute(query, [id]);
    return rows.length ? rows[0] : null;
}


module.exports={createUser,getUserData,getUserDataById: getUsernameById}