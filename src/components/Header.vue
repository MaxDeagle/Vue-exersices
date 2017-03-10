<template>
 <section>
 	<nav class="navbar navbar-default navbar-fixed-top">
  		<div class="container">
  		<div class='navbar-header'>
  		<a class='navbar-brand'>Central Park</a>
  		</div>
  		<div class='navbar-collapse collapse'>
  		<ul class='nav navbar-nav'>
  		<li><a v-scroll-to="{ el: '#welcome1', duration: 300, easing: 'linear', offset: -50}">Welcome</a></li>
  		<li><a v-scroll-to="{ el: '#welcome2', duration: 300, easing: 'linear', offset: -50}">Welcome</a></li>
  		</ul>
  		</div>
  		</div>
	</nav>
 </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to our site'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
