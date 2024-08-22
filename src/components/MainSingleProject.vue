<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                project:{},
            }
        },
        methods:{
            getProject(id){
                axios.get(`http://127.0.0.1:8000/api/projects/${id}`, {
                    params: {

                    }
                })
                .then((response) => {
                    console.log(response.data.data);
                    this.projects = response.data.data;
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
            this.getProject(this.$route.params.id);
        }
    }
</script>

<template>
    <section>
        <article class="card m-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"> {{ project.name }} </h5>
                <p class="card-text"> {{ project.description }} </p>
            </div>
        </article>
    </section>
</template>

<style lang="scss" scoped>

</style>