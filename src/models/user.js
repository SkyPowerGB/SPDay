const db=require("../config/db");


async function createUser(username,email,passwordHash){
    const query="INSERT INTO user_account (username,email,password_hash) values (?,?,?)"
    const [result] = await db.execute(query, [username, email, passwordHash]);
    return result;
}

async function getUserData(usrnm_email) {
    if(usrnm_email==null){return null;}
    const query = "SELECT * FROM user_account WHERE email = ? OR username = ? LIMIT 1";
    const [rows] = await db.execute(query, [usrnm_email, usrnm_email]);
    return rows.length ? rows[0] : null;
}


module.exports={createUser,getUserData}