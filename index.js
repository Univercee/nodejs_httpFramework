import App from './framework/App.js'
import Router from './framework/Router.js'
const PORT = process.env.PORT || 8000

//
const router = new Router()
router.get('/users', (req, res)=>{
    res.end("You send request to '/users'")
})
router.post('/posts', (req, res)=>{
    res.end("You send request to '/posts'")
})

//
const app = new App()
app.addRouter(router)
app.listen(PORT, ()=>{console.log("Server is online");})
