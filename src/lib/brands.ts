// Logos - Hardware
import willierLogo from '$lib/assets/brands/avila-multisports-marcas-willier.webp';
import inspireLogo from '$lib/assets/brands/avila-multisports-marcas-inspire.webp';
import trueLogo from '$lib/assets/brands/avila-multisports-marcas-true.webp';
import castelliLogo from '$lib/assets/brands/avila-multisports-marcas-castelli.webp';
import micheLogo from '$lib/assets/brands/avila-multisports-marcas-miche.webp';
import speedsixLogo from '$lib/assets/brands/avila-multisports-marcas-speedsix.webp';
import sciconLogo from '$lib/assets/brands/avila-multisports-marcas-scicon.webp';


// Logos - Accessories
import NZManufacturingLogo from '$lib/assets/brands/avila-multisports-marcas-nz-manufacturing.webp';
import safettiLogo from '$lib/assets/brands/avila-multisports-marcas-safetti.webp';
import SRMLogo from '$lib/assets/brands/avila-multisports-marcas-srm.webp';

// Images - Hardware
import willierImage from '$lib/assets/main/avila-multisports-principal-tubo-direccion-bicicleta-WILLIER.webp';
import inspireImage from '$lib/assets/main/avila-multisports-principal-mujer-de-espalda-multifuncional-INSPIRE.webp';
import trueImage from '$lib/assets/main/avila-multisports-principal-personas-corriendo-treadmills-TRUE.webp';
import castelliImage from '$lib/assets/main/avila-multisports-principal-mujer-ciclista-contraluz-CASTELLI.webp';
import micheImage from '$lib/assets/main/avila-multisports-principal-ruedas-bicicleta-ruta-MICHE.webp';
import speedsixImage from '$lib/assets/main/avila-multisports-principal-manzana-SPEEEDSIX.webp';
import sciconImage from '$lib/assets/main/avila-multisports-principal-ciclistas-en-via-SCICON.webp';


// Images - Accesories
import NZManufacturingImage from '$lib/assets/accesories/avila-multisports-accesorios-nadador-sumergido-piscina.webp';
import safettiImage from '$lib/assets/accesories/avila-multisports-accesorios-ciclistas-vestidos-safetti.webp';
import SRMImage from '$lib/assets/accesories/avila-multisports-accesorios-plato-bicicleta-SRM.webp';

export const brands = [
	{
		name: 'Willier logo',
		image: willierLogo
	},
	{
		name: 'Inspire logo',
		image: inspireLogo
	},
	{
		name: 'True logo',
		image: trueLogo
	},
	{
		name: 'Castelli logo',
		image: castelliLogo
	},
	{
		name: 'Miche logo',
		image: micheLogo
	},
	{
		name: 'Speedsix logo',
		image: speedsixLogo
	},
	{
		name: 'Scicon logo',
		image: sciconLogo
	}
];

export const carousel = {
	hardware: [
		{
			name: 'Willier logo',
			copy: {
				main: 'Pasión por la Velocidad',
				secondary:
					'Descubre nuestra colección de bicicletas de alto rendimiento, diseñadas para superar tus límites en cada pedalada'
			},
			logo: willierLogo,
			image: willierImage
		},
		{
			name: 'Inspire logo',
			copy: {
				main: 'Entrena con Propósito',
				secondary: 'Experimenta la ingeniería de precisión y el diseño ergonómico en cada pieza de nuestro equipo de fuerza'
			},
			logo: inspireLogo,
			image: inspireImage
		},
		{
			name: 'True logo',
			copy: {
				main: 'Rendimiento Duradero',
				secondary: 'Equipos de fitness de primera calidad, diseñados para ofrecer un rendimiento excepcional y una durabilidad superior'
			},
			logo: trueLogo,
			image: trueImage
		},
		{
			name: 'Castelli logo',
			copy: {
				main: 'Accesorios de Ciclismo de Élite',
				secondary: 'Completa tu equipo con accesorios diseñados para rendimiento superior, confort y estilo en cada ruta'
			},
			logo: castelliLogo,
			image: castelliImage
		},
		{
			name: 'Miche logo',
			copy: {
				main: 'Ingeniería Italiana en Cada Componente',
				secondary: 'El equilibrio perfecto entre diseño, tecnología y ligereza para llevar tu pedaleo al siguiente nivel.'
			},
			logo: micheLogo,
			image: micheImage
		},
		{
			name: 'Speedsix logo',
			copy: {
				main: 'Ligereza que Impulsa',
				secondary: 'Ruedas de carbono para bicicletas de ruta. Diseñadas para una rigidez incomparable y una aceleración sin esfuerzo'
			},
			logo: speedsixLogo,
			image: speedsixImage
		},
		{
			name: 'Scicon logo',
			copy: {
				main: 'Equipamiento de Élite para Ciclismo',
				secondary: 'Desde el viaje hasta la ruta, encuentra accesorios de alta calidad: protección, organización y visión clara para cada ciclista'
			},
			logo: sciconLogo,
			image: sciconImage
		}
	],
	accesories: [
		{
			name: 'NZ Manufacturing',
			logo: NZManufacturingLogo,
			image: NZManufacturingImage
		},
		// {
		// 	name: 'Saffeti',
		// 	logo: safettiLogo,
		// 	image: safettiImage
		// },
		{
			name: 'SRM',
			logo: SRMLogo,
			image: SRMImage
		}
	]
};
