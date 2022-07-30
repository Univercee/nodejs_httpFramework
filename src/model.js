import {app} from '../index.js'

const db_getUsers = () => {
    return app.database.query(`SELECT * from users`)
}
const db_getUser = (id) => {
    return app.database.query(`SELECT * from users WHERE id = ${id}`)
}
const db_addUser = (user) => {
    return app.database.query(`INSERT INTO users(name) VALUES('${user.name}')`)
}

export {db_getUser, db_getUsers, db_addUser}