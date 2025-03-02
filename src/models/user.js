const db=require("../config/db");


async function createUser(username,email,passwordHash){
    const query="INSERT INTO user_account (username,email,password_hash) values (?,?,?)"
    const [result] = await db.execute(query, [username, email, passwordHash]);
    return result;
}

module.exports={createUser}