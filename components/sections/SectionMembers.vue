<template>
	<section class="flex-col">
		<div class="flex w-full justify-center md:justify-between items-center mb-6">
			<img src="/lod-cropped.png" alt="logo" class="logo">
			<h1>Equipe</h1>
			<img src="/lod-cropped.png" class="opacity-0 logo">
		</div>
		<div class=" flex overflow-x-scroll gap-6 pb-2">
			<Profile />
			<Profile />
			<Profile />
			<Profile />
			<Profile />
			<Profile />
		</div>
	</section>
</template>

<script>
import Profile from '~/components/Profile.vue';

export default {
	name: 'SectionMembers',
	components: {
		Profile,
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

*::-webkit-scrollbar
	height: 4px

*::-webkit-scrollbar-track
	background: transparent

*::-webkit-scrollbar-thumb
	background-color: #ef8430
	border-radius: 20px
	height: 5px
</style>
