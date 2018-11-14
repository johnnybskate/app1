<<<<<<< HEAD
import Api from '@/services/Api'
=======
// Your error is here. Not in your component. you see how you are missing a slash after the @?
import Api from '@services/Api'
>>>>>>> c77266063b55ede5acb643177ca61fafd701b059
// export Object that has register 
export default{
    register (credentials) {
        return Api().post('register', credentials)
      },
      login (credentials) {
        return Api().post('login', credentials)
      }
}
