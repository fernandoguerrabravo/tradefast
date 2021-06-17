import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'dashboard-component',
				title: 'Dashboard',
				translate: 'DASHBOARD',
				type: 'item',
				icon: 'whatshot',
				url: '/dashboard'
			},
			{
				id: 'shipping-component',
				title: 'Shipping Quotation',
				translate: 'SHIPPINGQUOTATION',
				type: 'item',
				icon: 'whatshot',
				url: '/door2door'
			},
			{
				id: 'customs-component',
				title: 'example',
				translate: 'CUSTOMS',
				type: 'item',
				icon: 'whatshot',
				url: '/hts'
			},
			/*	{
					id: 'example-component',
					title: 'example',
					translate: 'EXAMPLE',
					type: 'item',
					icon: 'whatshot',
					url: '/example'
				}, */
			{
				id: 'rate-component',
				title: 'rate',
				translate: 'RATE',
				type: 'item',
				icon: 'whatshot',
				url: '/rate'
			},
			{
				id: 'research-component',
				title: 'research',
				translate: 'RESEARCHMARKET',
				type: 'item',
				icon: 'timeline',
				url: '/research'
			},
			{
				id: 'listresearch-component',
				title: 'listresearch',
				translate: 'LISTRESEARCH',
				type: 'item',
				icon: 'timeline',
				url: '/listresearch'
			},
			{
				id: 'hts-component',
				title: 'example',
				translate: 'HTS',
				type: 'collapse',
				icon: 'whatshot',
				children: [

					{
						id: 'hts-component',
						title: 'classifications',
						translate: 'CLASSIFICATIONS',
						type: 'item',
						icon: 'timeline',
						url: '/htstaxlist'
					},
					{
						id: 'special-component',
						title: 'htsspecial',
						translate: 'HTSSPECIAL',
						type: 'item',
						icon: 'timeline',
						url: '/research'
					}

				]

			},
			{
				id: 'bonds-component',
				title: 'example',
				translate: 'BONDS',
				type: 'item',
				icon: 'whatshot',
				url: '/hts'
			},
			{
				id: 'insurance-component',
				title: 'example',
				translate: 'INSURANCE',
				type: 'item',
				icon: 'whatshot',
				url: '/hts'
			}
		]
	}
];

export default navigationConfig;
