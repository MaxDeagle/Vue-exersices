<template>
 <div class='wrapper'>
   <navbar></navbar>
   <welcome id='welcome'></welcome>
    <welcome id='welcome1'></welcome>
     <welcome id='welcome2'></welcome>
 </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to our site'
    }
  },
  components: {
    'welcome' : require('./Welcome.vue'),
    'navbar' : require('./Header.vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
@import '../../scss/base.scss'
</style>
