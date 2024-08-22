<script>
import MainHome from '@/pages/MainHome.vue';

    export default{
        data(){
            return{
                linksName : [
                    {
                        label: "Home",
                        name: "home"
                    },
                    {
                        label: "Progetti",
                        name: "projects"
                    },
                    {
                        label: "Visita",
                        name: "show"
                    },
                ]
            }
        },
    }
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="link in linksName">
                            <router-link class="nav-link active" aria-current="page" :to="{ name: link.name }">{{ link.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

</style>
