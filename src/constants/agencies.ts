export const AGENCIES = {
	BREST: 'Brest',
	BORDEAUX: 'Bordeaux',
	CASABLANCA: 'Casablanca',
	CLERMONT_FERRAND: 'Clermont-Ferrand',
	GRENOBLE: 'Grenoble',
	LILLE: 'Lille',
	LYON: 'Lyon',
	NANTES: 'Nantes',
	NIORT: 'Niort',
	PARIS: 'Paris',
	RENNES: 'Rennes',
	TOULOUSE: 'Toulouse',
	MONTREAL: 'Montréal',
	SINGAPOUR: 'Singapour',
} as const;

interface AgencyLocation {
	positionX: number;
	positionY: number;
}

export const AGENCIES_LOCATION: {[key: string]: AgencyLocation} = {
	[AGENCIES.BREST]: {
		positionX: 653,
		positionY: 590,
	},
	[AGENCIES.BORDEAUX]: {
		positionX: 530,
		positionY: 400,
	},
	[AGENCIES.CASABLANCA]: {
		positionX: 590,
		positionY: 260,
	},
	[AGENCIES.CLERMONT_FERRAND]: {
		positionX: 420,
		positionY: 450,
	},
	[AGENCIES.GRENOBLE]: {
		positionX: 320,
		positionY: 420,
	},
	[AGENCIES.LILLE]: {
		positionX: 410,
		positionY: 685,
	},
	[AGENCIES.LYON]: {
		positionX: 355,
		positionY: 440,
	},
	[AGENCIES.NANTES]: {
		positionX: 550,
		positionY: 515,
	},
	[AGENCIES.NIORT]: {
		positionX: 510,
		positionY: 480,
	},
	[AGENCIES.PARIS]: {
		positionX: 430,
		positionY: 590,
	},
	[AGENCIES.RENNES]: {
		positionX: 555,
		positionY: 560,
	},
	[AGENCIES.TOULOUSE]: {
		positionX: 470,
		positionY: 350,
	},
	[AGENCIES.MONTREAL]: {
		positionX: 630,
		positionY: 695,
	},
	[AGENCIES.SINGAPOUR]: {
		positionX: 230,
		positionY: 265,
	},
} as const;
