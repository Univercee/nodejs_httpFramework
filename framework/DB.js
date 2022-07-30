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
        return new Promise((resolve, reject)=>{
            this.connection.query(query, (err, result)=>{
                if(err){
                    reject(new Error(err))
                }
                else if(result){
                    result = JSON.parse(JSON.stringify(result))
                    resolve(result)
                }
                else{
                    resolve()
                }
                
            })
        })
    }

    connect(){
        this.connection.connect((err)=>{
            if(err) throw new Error(err)
            console.log("Database connected");
        });
    }
}