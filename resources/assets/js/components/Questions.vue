<template>
    <div class="panel panel-default">
        <div class="panel-heading">question list
        </div>
        <!--<button class="btn btn-danger" @click='getLists()'>get list</button>-->
        <ul>
            <li class="list-group-item"
                v-for="row in lists">
                <router-link :to="{path:'/questions/' + row.id}">
                    {{ row.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import  {mapState, mapActions} from 'vuex'
    export default {
        name: "Questions",
        //使用 computed 读取 store 上的数据。
        computed:{
            lists(){
                console.log(this.$store.state.questions.lists);
                return this.$store.state.questions.lists;
            }
        },
/*
        computed:mapState({
            lists:state => state.questions.lists //可以用解构 ...mapState(["xx"])
        }),
*/
        created(){
            this.getLists();
        },
        methods: {
            /*getLists(){
                // this.$store.dispatch('getLists');
                this.getLists();//遇上面同义； 解构后可以直接使用 this 调用
            },*/
            ...mapActions([
                'getLists'
            ])
        }

    }
</script>

<style scoped>

</style>