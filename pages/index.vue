<template>
	<div>
		<SectionHome />
		<SectionMembers />
	</div>
</template>

<script>
import SectionHome from '~/components/sections/SectionHome.vue';
import SectionMembers from '~/components/sections/SectionMembers.vue';

export default {
	name: 'Index',
	components: {
		SectionHome,
		SectionMembers,
	},
};
</script>

<style lang="sass">
section
	@apply flex-centered flex-col lg:flex-row h-screen py-4

h1
	font-size: 36px
	line-height: 64px
	font-weight: 700
.flex-centered
	@apply flex justify-center items-center
.accent-text
	@apply font-bold text-2xl

</style>
