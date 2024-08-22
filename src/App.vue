<script>
  import AppHeader from './components/AppHeader.vue';
  import AppFootern from './components/AppFooter.vue';
  export default{
      components:{
        AppHeader,
        AppFootern,
      },
    }
</script>

<template>
  <AppHeader/>
  <RouterView/>
  <AppFootern/>
</template>

<style lang="scss">

</style>
