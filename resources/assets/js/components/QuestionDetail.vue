<template>
    <div class="panel panel-default">
        <div class="panel-heading">question detail</div>
        <div>
            <h2>{{detail.title}}</h2>
            <p v-html="detail.body"></p>
        </div>

    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "QuestionDetail",
        computed:{
            ...mapState({
                detail:state => state.questions.detail //可以用解构 ...mapState(["xx"])
            })
        },
        created(){
            this.getDetail(this.$route.params.id);
        },
        methods:{
            ...mapActions(['getDetail'])
        },
    }
</script>

<style scoped>

</style>