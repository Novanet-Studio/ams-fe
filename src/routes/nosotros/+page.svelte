<script lang="ts">
	import { onMount } from 'svelte';
	import FirstImg from '$lib/components/about/FirstImg.svelte';
	import Goals from '$lib/components/about/Goals.svelte';
	import History from '$lib/components/about/History.svelte';
	import Philosophy from '$lib/components/about/Philosophy.svelte';
	import SecondImg from '$lib/components/about/SecondImg.svelte';
	import ThirdImg from '$lib/components/about/ThirdImg.svelte';
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

<div class="overflow-y-scroll snap-y snap-mandatory overflow-scroll h-screen">
	<div class="lg:(flex flex-row-reverse)">
		<FirstImg />
		<History topic={data.content.topics[0]} />
	</div>
	<div class="lg:(flex flex-row-reverse)">
		<SecondImg />
		<Philosophy topic={data.content.topics[1]} />
	</div>
	<div class="lg:(flex flex-row-reverse)">
		<ThirdImg />
		<Goals {info} />
	</div>
</div>
