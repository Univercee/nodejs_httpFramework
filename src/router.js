import Router from '../framework/Router.js'
const router = new Router()

const users = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Ben"}
];
router.get('/users', (req, res)=>{
    res.send(users)
})
router.post('/posts', (req, res)=>{
    let user = req.body
    users.push(user)
    res.send(user)
})

export default router