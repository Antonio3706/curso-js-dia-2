import bcrypt from "bcrypt";
//Encriptar contraseñas
export async function hashPassword(password){
    const saltRounds=10;
    return await bcrypt.hash(password, saltRounds);
}

export async function checkPassword(password, hash){
    return await bcrypt.compare(password, hash);
}