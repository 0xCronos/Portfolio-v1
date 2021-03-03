module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{html,jsx,js}', './styles/**/*.{css, js, jsx}'],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	darkMode: 'class',
	theme: {
		extend: {
			colors:{
				'ebony': '#0c1621',
				'ebony-clay': '#26323f',
				'stone': '#0f1c2a',
				'aquamarine': '#66ffff',
				'eastern-blue': '#1f85ac',
				'gallery': '#efefef',
				'alto': '#d7d7d7'
			},
			textColor: {
				'primary': '#efefef',
				'secondary': '#d7d7d7',
				'tertiary': '#818181',
			},
			backgroundImage: theme => ({
				'avatar': "url('/assets/images/avatar.png')",
				'avatar-hover': "url('/assets/images/avatar-hover.png')"
			})
		},
	},
	variants: {
		backgroundImage: ['hover'],
		Visibility: ['hover'],
		transitionProperty: {
			'bg': 'background-image',
			'visible': 'visibility',
			'invisible': 'visibility',
		},
		extend: {},
	},
	plugins: [],
}
