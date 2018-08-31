// import axios from 'axios'
import config from '../config'

export const userinfo = async (ctx, next) => {
  let token = ctx.session.user.token || ''
  return (ctx.body = {
    ret: 200,
    msg: '获取成功',
    data: { token: token }
  })
}

export const login = async (ctx, next) => {
  const { mobile, psd } = ctx.request.body
  if (!mobile || !psd) {
    return (ctx.body = {
      ret: 303,
      msg: '缺少请求参数',
      data: {}
    })
  }

  // 登陆成功
  let token = "token001";
  let signkey = config.sign_key

  let info = {
    id: "admin",
    mobile: "18910806782",
    name: "zhangsan",
    sex: "男",
    status: "",
    role_id: "admin",
    depart_id: "ss",
    deader_id: "dd"
  }

  let session = ctx.session
  session.user = {
    token: token,
    sign_key: signkey,
    info: info
  }
  ctx.session = session

  return (ctx.body = {
    ret: 200,
    msg: '请求成功',
    data: {
      code: 0,
      message: '登录成功',
      token: token,
      info: info
    }
  })
}

export const logout = async (ctx, next) => {
  try {
    ctx.session.user = null
    return (ctx.body = {
      ret: 200,
      msg: '请求成功',
      data: {
        code: 0,
        message: '退出成功'
      }
    })
  } catch (e) {
    return (ctx.body = {
      ret: 200,
      msg: '请求成功',
      data: {
        code: -1,
        message: '退出失败'
      }
    })
  }
}
