import { createRouter, createWebHistory } from 'vue-router';
import MainHome from './pages/MainHome.vue';
import MainProjects from './pages/MainProjects.vue';
import MainShow from './pages/MainShow.vue';
import MainSingleProject from './components/MainSingleProject.vue';

const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: MainHome
},
{
path: '/projects',
name: 'projects',
component: MainProjects
},
{
    path: '/view/:id',
    name: 'show',
    component: MainSingleProject
    },
]
});
export { router };