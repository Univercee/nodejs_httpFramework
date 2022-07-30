import Router from '../framework/Router.js'
import {getUsers, addUser} from './controller.js';
const router = new Router()

router.get('/users', getUsers)
router.post('/posts', addUser)

export default router