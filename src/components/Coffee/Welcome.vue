<template>
 <section>
 	<div class='container welcome'>
    <h1>Welcome to our blahblahblah</h1>
    <button v-on:click='clickHere'>Click here</button>
    <div v-if="clicked">Yo man</div> 
 	</div>
 </section>
</template>

<script>
export default {
  name: 'hello',

  data () {
    return {
      msg: 'Welcome to our site',
      clicked: false
    }
  },
  methods: {
  	clickHere: function () {
  		this.clicked = true
  		alert('privet. тест акка Кати')
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
