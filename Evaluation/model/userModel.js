import fs from 'fs';

export const getData = () =>{
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    let users = data.users;
    return {data, users};
}

export const addOrUpdateUsers = (data) =>{
    fs.writeFileSync("./db.json", JSON.stringify(data))
}