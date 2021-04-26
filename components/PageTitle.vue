<template lang="pug">
	div(class="flex w-full justify-center md:justify-between items-center mb-6")
		img(src="/lod-cropped.png", alt="logo", class="logo")
		h1 {{ title }}
		img(src="/lod-cropped.png", alt="logo", class="logo opacity-0")
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="sass" scoped>
.logo
	display: none
	width: 188px
	height: 80px
	@screen md
		display: unset

</style>
