<template>
    <div>
        <h1>news</h1>
        <p>news.vue</p>
        <ul>
            <li v-for="value in news">
                <h4>{{value.title}}</h4>
                <p>{{value.content}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "News",
        data(){
            return {
                news:null
            }
        },
        mounted(){
            //异步
            //使用vue-axios 后 可以this.axios
            this.axios.request('/api/news').then(res=>{
                    console.log(res.data);
                    this.news = res.data; //此处data 是一个数组，内部存储的是对象；遍历是时使用 in
                });
        },
        methods:{

        },
    }
</script>

<style scoped>

</style>