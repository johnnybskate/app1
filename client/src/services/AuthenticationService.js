// Your error is here. Not in your component. you see how you are missing a slash after the @?
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
