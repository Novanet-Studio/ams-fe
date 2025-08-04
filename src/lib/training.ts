//? banner image
import trainingsBanner from '$lib/assets/trainings/avila-multisports-training-banner.webp';

//? coaches avatars
import CarolinaAvatar from '$lib/assets/trainings/coaches/avila-multisports-coaches-carolina-lairet.webp';
import SalvatoreAvatar from '$lib/assets/trainings/coaches/avila-multisports-coaches-salvatore-cali.webp';
import FedericoAvatar from '$lib/assets/trainings/coaches/avila-multisports-coaches-federico-pisani.webp';

//? allies avatars
import CMSAvatar from '$lib/assets/trainings/allies/avila-multisports-allies-cms.webp';
import LuxorAvatar from '$lib/assets/trainings/allies/avila-multisports-allies-luxor.webp';

import VoidAvatar from '$lib/assets/trainings/allies/avila-multisports-allies-avatar.webp';

//? training info bg image
import trainingInfoBg from '$lib/assets/trainings/avila-multisports-training-info-bg.webp';

import icon1 from '$lib/assets/trainings/info/icon-1.svg';
import icon2 from '$lib/assets/trainings/info/icon-2.svg';
import icon3 from '$lib/assets/trainings/info/icon-3.svg';
import icon4 from '$lib/assets/trainings/info/icon-4.svg';
import icon5 from '$lib/assets/trainings/info/icon-5.svg';

export const info = [
	{
		label: 'Logística',
		icon: icon1,
		desc: 'En las rodadas (solo aplica en Caracas): Vehículo de apoyo, asistencia mecánica, primeros auxilios y traslado en caso de emergencia. \n\n En los principales eventos en Venezuela como: Reto al Collado del Cóndo, Gran Fondo Virgen del Valle, Reto a la Cumbre, Trianz, Medio Ironman de Cumana.'
	},
	{
		label: 'Uso de instalaciones',
		icon: icon2,
		desc: 'Caracas MultiSport para las actividades de Triatlón es permitido para nuestros miembros, con el fin de practicar diversas actividades  de Triatlón, como la natación'
	},
	{
		label: 'Descuentos especiales',
		icon: icon3,
		desc: 'En todo el portafolio de marcas que manejamos, así como opciones de crédito en algunas de ellas como: Wilier, Miche, Speed Six, Castelli, TRUE, Inspire, Rocket.'
	},
	{
		label: 'Planes especiales',
		icon: icon4,
		desc: 'En las instalaciones de nuestros aliados Ccs Multi sport y Luxor Fitness Center'
	},
	{
		label: 'Paseos',
		icon: icon5,
		desc: 'En las diferentes zonas turisiticas y gastronómicas: \n\n- Bailadores, Mérida. \n- Girona, España. \n- La gran Vuelta (Valencia-Merida-Valencia)'
	}
];

export const allies = [
	{
		name: 'Centro deportivo Ccs Multisport',
		description: '',
		avatar: CMSAvatar,
		url: ''
	},
	{
		name: 'Luxor Fitness Center',
		description: '',
		avatar: LuxorAvatar,
		url: ''
	},
	{
		name: 'Carolina Lairet',
		description: 'Nutricionista Clínico y Deportivo',
		avatar: CarolinaAvatar,
		url: ''
	},
	{
		name: 'Franco Cordivan',
		description: 'Traumatólogo especialista en rodilla',
		avatar: VoidAvatar,
		url: ''
	},
	{
		name: 'Miguel Sánchez Rubio',
		description: 'Traumatólogo especialista en pie y tobillo',
		avatar: VoidAvatar,
		url: ''
	},
	{
		name: 'Jose Luis Cibeira',
		description: 'Traumatólogo especialista en Hombro',
		avatar: VoidAvatar,
		url: ''
	},
	{
		name: 'Ethy Oziel',
		description: 'Médico Fisiatra',
		avatar: VoidAvatar,
		url: ''
	}
];

export const coaches = [
	{
		name: 'Carolina Lairet',
		avatar: CarolinaAvatar,
		speciality: 'Natacion',
		instagramProfile: 'https://www.instagram.com/nutricioncaro/',
		shortBio:
			'Nutricionista deportiva con especialización de la Universidad Central de Venezuela y un Máster en Nutrición Humana de la Universidad de Barcelona. Ha realizado cursos avanzados en Nutrición Deportiva con el Comité Olímpico Internacional y la Federación Mexicana de Nutrición Deportiva, incluyendo Antropometría ISAK nivel 1.'
	},
	{
		name: 'Salvatore Cali',
		avatar: SalvatoreAvatar,
		speciality: 'Ciclismo',
		instagramProfile: 'https://www.instagram.com/salvadorcali/',
		shortBio:
			'Entrenador de triatlón con casi 30 años de experiencia en la formación de atletas en natación, ciclismo y carrera. Es director de Ccs Multisport y Ávila Multisport, impulsando el desarrollo deportivo en Venezuela. Su enfoque combina educación física, psicología y entrenamiento de alto rendimiento.'
	},
	{
		name: 'Federico Pisani',
		avatar: FedericoAvatar,
		speciality: 'Fortalecimiento',
		instagramProfile: 'https://www.instagram.com/fuconei/',
		shortBio:
			'Biólogo y escalador de Big Wall con 30 años de experiencia, actualmente entrenador del equipo venezolano de escalada deportiva. También es Fisiólogo del Ejercicio y Guía de Tirika Expeditions.'
	}
];

export { trainingsBanner, trainingInfoBg };
