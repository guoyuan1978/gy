import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function accountLogin(params) {
  debugger
  return request('/server/api/login/account', {
    method: 'POST',
    data: params,
  });
}
