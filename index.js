import App from './framework/App.js'
import router from './src/router.js'
import parseJson from './framework/middlewares/parseJson.js'
import parseUrl from './framework/middlewares/parseUrl.js'
const PORT = process.env.PORT || 8000
const BASE_URL = `http://localhost:${PORT}`

const app = new App()
app.addRouter(router)
app.use(parseJson)
app.use(parseUrl(BASE_URL))
app.listen(PORT, ()=>{console.log("Server is online");})
