const users = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Ben"}
];

const getUsers = (req, res)=>{
    if(req.params.id){
        res.send(users.find(user => user.id == req.params.id))
        return
    }
    res.send(users)
}

const addUser = (req, res)=>{
    let user = req.body
    users.push(user)
    res.send(user)
}

export {getUsers, addUser}