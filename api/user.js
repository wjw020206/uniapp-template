/**
 * 登录
 * @param {Object} params
 * @param {string} params.username 用户名
 * @param {string} params.password 密码
 */
export function fetchLogin(params, config = {}) {
  return uni.$u.http.post('/login', params, config);
}
