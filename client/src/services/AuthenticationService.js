import Api from '@services/Api'
// export Object that has register 
export default{
    register (credentials) {
        return Api().post('register', credentials)
      },
      login (credentials) {
        return Api().post('login', credentials)
      }
}
