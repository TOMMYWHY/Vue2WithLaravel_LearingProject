import  axios from 'axios'
import VueAxios from 'vue-axios'

export default {
    getQuestionsLists(params){
        return axios.get('api/questions',{
            params:params
        })
    },
    getQuestionsDetail(id){
        return axios.get('api/questions/'+id,{
            id:id
            // id : this.$route.params.id

        })
    }
}