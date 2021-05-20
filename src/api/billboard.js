import request from '@/utils/request'

export function getBillboard() {
  return request({
    url: 'billboard/show',
    method: 'get'
  });
}

export function getBillboard1() {
  return request({
    url: '/ums/admin/getinfo',
    method: 'get'
  });
}

export function setBillboard(user1) {
  return request({
    url: '/ums/admin/setinfo',
    method: 'post',
    data: user1
  });
}
