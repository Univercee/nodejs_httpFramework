import {db_getUser, db_getUsers, db_addUser} from './model.js'

const getUsers = async  (req, res)=>{
    if(req.params.id){
        const user = await db_getUser(req.params.id)
        res.send(user)
    }
    else{
        const users = await db_getUsers()
        res.send(users)
    }
}

const addUser = async (req, res)=>{
    let user = req.body
    await db_addUser(user)
    res.send(user)
}

export {getUsers, addUser}