<script lang="ts">
	import { onMount } from 'svelte';
	import HistoryImg from '$lib/components/about/HistoryImg.svelte';
	import Goals from '$lib/components/about/Goals.svelte';
	import History from '$lib/components/about/History.svelte';
	import Philosophy from '$lib/components/about/Philosophy.svelte';
	import PhilosophyImg from '$lib/components/about/PhilosophyImg.svelte';
	import GoalsImg from '$lib/components/about/GoalsImg.svelte';
	import { elementColors } from '$lib/store';
	import type { Topic } from '$lib/types';

	interface Contact {
		map: string;
		phones: string[];
	}

	interface Gallery {
		name: string;
		alt: string;
		image: string;
	}

	interface EnterpriseTargets {
		title: string;
		content: Topic[];
	}

	interface Data {
		contact: Contact;
		gallery: Gallery[];
		paget_title: string;
		title: string;
		topics: Topic[];
	}

	export let data: { content: Data };

	const info = {
		title: data.content.topics[2].title,
		content: (data.content.topics[2] as unknown as EnterpriseTargets).content as Topic[]
	};

	onMount(() => {
		$elementColors.logo = 'light';
		$elementColors.burger = 'light';
		$elementColors.copyright = 'dark';
	});
</script>

<svelte:head>
	<title>{data.content.title}</title>
</svelte:head>

<div class="lg:(flex flex-row)">
	<History topic={data.content.topics[0]} />
	<HistoryImg />
</div>
<div class="lg:(flex flex-row)">
	<Philosophy topic={data.content.topics[1]} />
	<PhilosophyImg />
</div>
<div class="lg:(flex flex-row)">
	<Goals {info} />
	<GoalsImg />
</div>
