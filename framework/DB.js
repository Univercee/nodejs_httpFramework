import mysql from 'mysql'
export default class DB{
    constructor(host, port, user, password, database){
        this.connection = mysql.createConnection({
            host: host,
            port: port,
            user: user,
            password: password,
            database: database,})
    }

    query(query){
        return this.connection.query(query)
    }

    connect(){
        this.connection.connect((err)=>{
            if(err) throw new Error(err)
            console.log("Database connected");
        });
    }
}