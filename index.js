import App from './framework/App.js'
import router from './src/router.js'
import parseJson from './framework/middlewares/parseJson.js'
import parseUrl from './framework/middlewares/parseUrl.js'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '127.0.0.1'
const DB_PORT = process.env.DB_PORT || '3306'
const USER = process.env.USER || 'root'
const PASSWORD = process.env.PASSWORD || ''
const DATABASE = process.env.DATABASE || 'root'
const BASE_URL = `http://localhost:${PORT}`

const app = new App()
app.addRouter(router)
app.make_db_connection(HOST, DB_PORT, USER, PASSWORD, DATABASE)
app.use(parseJson)
app.use(parseUrl(BASE_URL))
app.listen(PORT, ()=>{console.log(`Server is online on PORT ${PORT}`);})

export {app}
