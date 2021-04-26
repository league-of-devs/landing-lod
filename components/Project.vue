<template lang="pug">
	div.project
		div.info
			h3 {{ title }}
			p {{ info }}
		div.img(:style="`background-image: url(/projects/${img})`")
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
		info: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="sass" scoped>
.project
	@apply w-full grid grid-cols-1 gap-8 lg:grid-cols-2 items-center my-10
	&:nth-child(odd)
		direction: rtl
	div.img
		max-width: 100%
		height: 250px
		background-size: cover
		background-position: center center
		border-radius: 15px
	.info
		h3
			font-size: 22px
			font-weight: 700
			@apply mb-4
		p
			font-size: 18px
</style>
