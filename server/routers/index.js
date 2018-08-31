import Router from 'koa-router'
import { userinfo, login, logout } from '../controller/user'
const router = new Router()

router.get('/api/user/getUserInfo', userinfo)
router.post('/api/user/login', login)
router.post('/api/user/logout', logout)
router.get('/api/user/logout', logout)

export default router
