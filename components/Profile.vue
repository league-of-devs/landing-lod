<template lang="pug">
.profile-card(:style='background', class="transform hover:-translate-y-2")
	img.pic(:src='`/profiles/${profile}.jpeg`')
	h2 {{ name }}
	i(v-for="(tag, i) in tags", :key='i') {{ tag }}
	.buttons
		a(
			v-for="(button, i) in buttons",
			:key='i',
			:href='button.link',
			target='_blank'
		)
			img(:src='`/icons/${button.icon}`', class="icon", v-if="button.icon")
			span {{ button.text }}
</template>

<script>
export default {
	name: 'Profile',
	props: {
		name: {
			type: String,
			required: true,
		},
		profile: {
			type: String,
			required: true,
		},
		tags: {
			type: Array,
			default: () => [],
		},
		buttons: {
			type: Array,
			default: () => [],
		},
		position: {
			type: [Number, String],
			required: true,
		},
	},
	data () {
		return {
			bg: 'linear-gradient(193.74deg, rgba(250, 133, 49, 0.49) 7.31%, rgba(0, 0, 0, 0.66) 76.21%), linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)), ',
		};
	},
	computed: {
		background () {
			const style = {
				backgroundImage: `${this.bg} url("/profiles/${this.profile}_cover.jpg")`,
				backgroundPosition: `${this.position}%`,
			};
			return style;
		},
	},
};
</script>

<style lang="sass" scoped>
.profile-card
	background-color: pink
	height: 480px
	min-width: 240px
	border-radius: 15px
	background-repeat: no-repeat
	background-size: cover
	transition: all .3s
	z-index: 999
	position: relative
	@apply flex flex-col items-center
	@screen lg
		height: 480px
		min-width: 240px
	@screen xl
		height: 600px
		min-width: 300px

	img.pic
		@apply rounded-full
		margin-top: 36px
		box-shadow: 0px 0px 26px 6px rgba(0, 0, 0, 0.75)
		height: 150px
		width: 150px

	h2
		font-size: 24px
		font-weight: 700
		color: #fefefe
		margin-top: 20px
	i
		color: #cbcbcb

	.buttons
		position: absolute
		bottom: 20px
		@apply flex flex-col gap-2
		a
			background-color: rgba(0,0,0,.8)
			border-radius: 10px
			color: white
			padding: 10px 20px
			@apply flex items-center justify-center gap-2
		.icon
			width: 15px
			height: 15px
</style>
