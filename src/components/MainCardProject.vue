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
                axios.get('http://127.0.0.1:8000/api/projects', {
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
            this.getProjects();
        }
    }
</script>

<template>
    <section>
        <article class="card m-3" style="width: 18rem;" v-for="project in projects">
            <div class="card-body">
                <h5 class="card-title"> {{ project.name }} </h5>
                <p class="card-text"> {{ project.description }} </p>
                <p class="card-text"> {{ project.id }} </p>
                <router-link class="nav-link active" aria-current="page" :to="{ name: 'show', params: { id: project.id } }">Espandi</router-link>
            </div>
        </article>
    </section>
</template>

<style lang="scss" scoped>

</style>
