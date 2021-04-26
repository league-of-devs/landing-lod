<template>
	<section class="flex-col">
		<PageTitle title="Membros" />
		<div class="profiles">
			<Profile v-for="member in members" v-bind="member" :key="member.profile" />
		</div>
	</section>
</template>

<script>
import Profile from '~/components/Profile.vue';
import PageTitle from '~/components/PageTitle.vue';

export default {
	name: 'SectionMembers',
	components: {
		Profile,
		PageTitle,
	},
	data () {
		return {
			members: [
				{
					name: 'Davi Rodrigues',
					tags: ['Full-Stack', 'Node.js | Next.js', 'Typescript'],
					profile: 'davi',
					position: 68,
					buttons: [{
						text: 'Linkedin',
						link: 'https://www.linkedin.com/in/developer-davi/',
						icon: 'linkedin.png',
					}],
				},
				{
					name: 'Rafael Freitas',
					tags: ['Front-End', 'Vue | Nuxt.js | TailwindCSS', 'React.js | Next.js'],
					profile: 'rafonel',
					position: 60,
					buttons: [{
						text: 'Linkedin',
						link: 'https://www.linkedin.com/in/rafonel2511/',
						icon: 'linkedin.png',
					}, {
						text: 'Website',
						link: 'https://passoca.com.br',
						icon: 'passoca.svg',
					}],
				},
				{
					name: 'Daniel Oliveira',
					tags: ['Full-Stack', 'Node.js | React.js', 'Typescript'],
					profile: 'daniel',
					position: 35,
					buttons: [{
						text: 'Website',
						link: 'https://http://ondaniel.com.br/',
						icon: '',
					}],
				},
				{
					name: 'Eduardo Nunes',
					tags: ['Front-end', 'React.js | Nuxt.js'],
					profile: 'eduardo',
					position: 45,
					buttons: [{
						text: 'Linkedin',
						link: 'https://www.linkedin.com/in/eduardo-nunes-5768a0168/',
						icon: 'linkedin.png',
					}, {
						text: 'Github',
						link: 'https://github.com/Dudow',
						icon: 'github.png',
					}],
				},
				{
					name: 'Guilherme Martins',
					tags: ['Back-end', 'Rust | Node.js', 'GraphQL | PHP', 'Python'],
					profile: 'guilherme',
					position: 0,
					buttons: [{
						text: 'Linkedin',
						link: 'https://www.linkedin.com/in/guilherme-martins-94aa6a1a7/',
						icon: 'linkedin.png',
					}, {
						text: 'Github',
						link: 'https://github.com/guilhermeSMartins',
						icon: 'github.png',
					}],
				},
				{
					name: 'Árnilsen Arthur',
					tags: ['Back-end', 'Java | PHP | C# ', 'Game Developer', 'Game Designer'],
					profile: 'arnilsem',
					position: 40,
					buttons: [{
						text: 'Linkedin',
						link: 'https://www.linkedin.com/in/arnilsen-arthur-aa0b04150/',
						icon: 'linkedin.png',
					}, {
						text: 'Github',
						link: 'https://github.com/arnilsenarthur',
						icon: 'github.png',
					}],
				},
			],
		};
	},
};
</script>

<style lang="sass" scoped>
.profiles
	min-height: 480px
	@apply w-full flex overflow-x-scroll gap-6 py-2
*::-webkit-scrollbar
	height: 4px

*::-webkit-scrollbar-track
	background: transparent

*::-webkit-scrollbar-thumb
	background-color: #ef8430
	border-radius: 20px
	height: 5px
</style>
