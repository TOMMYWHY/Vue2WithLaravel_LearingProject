<template>
    <div>
        <h1>welcome</h1>
        <div>
            <router-link :to="{name:'home'}" class="btn btn-primary">home</router-link>
            <router-link :to="{name:'news'}" class="btn btn-primary">news</router-link>
            <router-link :to="{name:'questions'}" class="btn btn-primary">questions</router-link>
        </div>
        <p>app.vue</p>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
    import Home from "./Home";
    export default {
        name: "App",
        components:{Home},
        data(){
            return {
            }
        },

    }
</script>

<style scoped>

</style>