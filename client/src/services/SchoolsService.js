import Api from '@/services/Api'

// export Object that has register 
export default{
    index () {
        return Api().get('schools')
    },
    post (school) {
        return Api().post('schools',school)
    }
}
