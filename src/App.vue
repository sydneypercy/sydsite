<script setup lang="ts">
	import Navbar from './components/navbar.vue';
	import Buttons from './components/buttons.vue';
</script>

<template>
	<Navbar/>
	<h1>House of Sydney</h1>
	<div>
		<router-view></router-view>
	</div>
	<p> 
		無我夢中　阿鼻叫喚　支離滅裂 
	</p>
	<Buttons/>
</template>

<style>
	
</style>

<style scoped></style>
