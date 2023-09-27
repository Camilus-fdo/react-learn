import BaseAPI from '../BaseAPI'

export default class AuthService extends BaseAPI {
    signIn (payload) {
        return new Promise((resolve, reject) => {
          const pathArr = ['auth', 'login']
    
          this.post(payload, pathArr).then((response) => {
            resolve(response)
          }).catch((err) => {
            reject(err)
          })
        })
      }
}