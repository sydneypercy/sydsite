<script setup lang="ts">
	import { useIntervalFn } from '@vueuse/core';
	const list_of_hobbies: string[] = [
		"a minecraft speedrunner", 
		"a dumb cybersecurity hobbyist", 
		"a bad developer",
		"a nerd in everything",
		"an anarchist", 
		"a glass beach fan",
		"a csh fan",
		"a project moon fan",
		"everything that is and isn't", 
		"a theyfailure",
		"existing",
		"still alive", 
		"a living oracle",
		"no longer human",
		"a 日本語学者",
		"an mega absol",
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

<script lang="ts">
	function revealTextScramble(
				fromText: string, 
				finalText: string, 
				fps = 16,
				scrambleChars = "0123456789!█▒░ABCDEF",
				blockChar = "█",
				revealSpeed = 0.045,
				blockChance = 0.35,
			 ) {
				const len = Math.max(fromText.length, finalText.length);
				let progress = 0;

				function randomChar() {
					return Math.random() < blockChance ? blockChar : scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
				}
				const scrambleAnim = useIntervalFn(() => {
					progress += revealSpeed * len;
					let out = "";
					for (let i = 0; i < len; i++) {
						const targetChar = finalText[i] ?? "";
						const fromChar = fromText[i] ?? "";
						if (i < progress) {
							out += targetChar;
						} else {
							if (targetChar === " " || fromChar === " ") out += " ";
							else out += randomChar();
						}
					}
					document.getElementById("textscramble").textContent = out;
					if (progress >= len) {
						document.getElementById("textscramble").textContent = finalText;
						scrambleAnim.pause()
					}
				}, 1000 / fps);
				console.log("clicked")
			}
</script>

<template>
	<div>
		<h2>About me</h2>
		<p>
			heya, i'm sydney (any/they), i'm 
			<span id="textscramble">{{ list_of_hobbies[Math.floor(Math.random() * list_of_hobbies.length)] }}</span>.
			<button @click="revealTextScramble(
				list_of_hobbies[Math.floor(Math.random() * list_of_hobbies.length)],
				list_of_hobbies[Math.floor(Math.random() * list_of_hobbies.length)])
				">
				click me ! 
			</button>
		</p>
	</div>
	<div>
		<h2> Interests </h2>
		<p></p>
	</div>
</template>

<style scoped>

</style>

