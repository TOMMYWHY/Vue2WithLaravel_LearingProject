<template>
    <div>
        <p>home.vue</p>
        <h2>{{msg}}</h2>
        <div>
            <button class="btn btn-danger"  @click="login">login</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                msg:'guest',
            }
        },
        methods:{
          login(){
            this.msg = 'tommy'
          }
        },
    }
</script>

<style scoped>

</style>