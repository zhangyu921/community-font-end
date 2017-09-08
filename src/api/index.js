const main = process.env.NODE_ENV === 'production'
  ? '/api/v1'
  : 'http://127.0.0.1:8082/api/v1'

export default {
  main,
  login: main + '/login',
  logout: main + '/logout'
}
