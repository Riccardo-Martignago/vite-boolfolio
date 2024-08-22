<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                projects:[],
            }
        },
        methods:{
            getProjects(){
                axios.get('/projects', {
                    params: {

                    }
                })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projects = response.data.results.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });  
            }
        },
        created(){
            this.getProjects();
        }
    }
</script>

<template>
    <main>
        <h1>MAIN</h1>
    </main>
</template>

<style lang="scss" scoped>

</style>
