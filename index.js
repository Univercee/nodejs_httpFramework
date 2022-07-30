import App from './framework/App.js'
import router from './src/router.js'
import parseJson from './framework/middlewares/parseJson.js'
const PORT = process.env.PORT || 8000

const app = new App()
app.addRouter(router)
app.use(parseJson)
app.listen(PORT, ()=>{console.log("Server is online");})
