// uno.config.ts
import { defineConfig } from 'unocss';
import {
	presetUno,
	presetIcons,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';
import { presetForms } from '@julr/unocss-preset-forms';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
	presets: [presetUno(), presetWebFonts(), presetIcons(), presetForms()],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	extractors: [extractorSvelte()],
	theme: {
		breakpoints: {
			xs: '340px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1366px'
		}
	}
});
