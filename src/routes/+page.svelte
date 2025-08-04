<script lang="ts">
	import Brands from '$lib/components/home/Brands.svelte';
	import FeaturedMessage from '$lib/components/home/FeaturedMessage.svelte';
	import Main from '$lib/components/home/Main.svelte';
	import Products from '$lib/components/home/Products.svelte';
	import Trainings from '$lib/components/home/Trainings.svelte';
	import YoutubeFollow from '$lib/components/home/YoutubeFollow.svelte';

	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ content, HomeCategories } = data);
</script>

<svelte:head>
	<title>{content.title}</title>
</svelte:head>

<Main />
<div class="lg:flex">
	<FeaturedMessage class="lg:w-1/2" />
	<Brands />
</div>

<Products data={$HomeCategories} />
<Trainings />
<YoutubeFollow />
