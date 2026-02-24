<script setup lang="ts">
	const list_of_hobbies: String[] = [
		"a minecraft speedrunner", 
		"a half-backed cybersecurity hobbyist", 
		"a bad developer",
		"a nerd in everything",
		"an anarchist", 
		"a gleach fan",
		"a csh fan",
		"a limbus company fan",
		"everything that is and isn't", 
		"a theyfailure",
		"existing",
		"still alive", 
		"a living oracle",
		"no longer human",
		"a 日本語学者",
		"an absol",
		"a drainer",
		"a hyperpop/hyperflip fan",
		"a rhythm gamer",
		"an index proselyte", 
		"able to speak toki pona",
		"an arch linux user",
		"insignificant in this big universe",
		"a mere stranger",
	]

</script>

<template>
	<div>
		<h2>About me</h2>
		<p>
			heya, i'm sydney (any/they), i'm 
			<span>{{ list_of_hobbies[Math.floor(Math.random() * list_of_hobbies.length)] }}</span>.
		</p>
	</div>
	<div>
		<h2> Interests </h2>
		<p></p>
	</div>
</template>

<style scoped>

</style>

