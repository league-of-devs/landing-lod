<template>
	<section class="sm:min-h-0 md:min-h-screen">
		<div class="w-full lg:w-1/2 flex-centered">
			<img src="lod-cropped.png" alt="logo" class="logo">
		</div>
		<div class="w-full lg:w-1/2 flex-centered">
			<p class="accent-text mt-24 lg:ml-24 lg:mt-0">
				Uma equipe especializada que torna ideias em realidade.
			</p>
		</div>
	</section>
</template>

<style lang="sass" scoped>
.logo
	width: 100%
	max-width: 280px
	max-height: 120px
	@apply mt-24 lg:mt-0
	@screen md
		max-width: 460px
		max-height: 240px
	@screen lg
		max-width: 600px
		max-height: 250px
</style>
