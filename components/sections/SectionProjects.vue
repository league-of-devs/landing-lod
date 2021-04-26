<template lang="pug">
	section.flex-col
		PageTitle(title="Projetos")
		div.projects
			Project(v-for="(project, i) in projects", :key="i", v-bind="project")
</template>

<script>
import PageTitle from '../PageTitle.vue';
import Project from '../Project.vue';

export default {
	name: 'SectionProjects',
	components: {
		PageTitle,
		Project,
	},
	data () {
		return {
			projects: [{
				title: 'Megahack 2020',
				info: 'Lendy is a MegaHack Stone challenge product concept. Stone challenged us to change how things are when you need money. Getting loans from a bank is boring and expensive. With Lendy, you can get money fast and without paying abusive fees.',
				img: 'lendy.png',
			}, {
				title: 'Megahack 2020 2.0',
				info: 'A nossa missão é levar o vendedor a evoluir dentro dos marketplaces e melhorar a experiência de seus clientes. A asKate é um SaaS que possui um sistema de inteligência interno: a Kate. Nossos serviços também podem ser utilizados via API, caso a loja queira implementar nossas funções em seu próprio APP.',
				img: 'askate.png',
			}],
		};
	},
};
</script>
