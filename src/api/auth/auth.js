import request from "@/utils/request";

// 注册
export function userRegister(userDTO) {
  return request({
    url: "/ums/admin/register",
    method: "post",
    data: userDTO
  });

}
// 前台用户登录
export function login(data) {
  return request({
    url: '/ums/admin/login',
    method: 'post',
    data
  });
}

export function getUserInfo() {
  return request({
    url: '/ums/admin/getinfo',
    method: 'get'
  });
}
