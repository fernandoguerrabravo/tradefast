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
				id: 'tools-component',
				title: 'example',
				translate: 'TOOLSDECISIONS',
				type: 'collapse',
				icon: 'whatshot',
				children: [

					{
						id: 'listresearch-component',
						title: 'listresearch',
						translate: 'RESEARCHMARKET',
						type: 'item',
						icon: 'timeline',
						url: '/research'
					},
					{
						id: 'hts-component',
						title: 'classifications',
						translate: 'CLASSIFICATIONS',
						type: 'item',
						icon: 'timeline',
						url: '/htstaxlist'
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
						id: 'rate-component',
						title: 'rate',
						translate: 'RATE',
						type: 'item',
						icon: 'whatshot',
						url: '/rate'
					},
				]
			},
			{
				id: 'booking-component',
				title: 'example',
				translate: 'BOOKING',
				type: 'item',
				icon: 'whatshot',
				url: '/'
			},

			{
				id: 'customs-component',
				title: 'example',
				translate: 'CUSTOMS',
				type: 'item',
				icon: 'whatshot',
				url: '/hts'
			},
			{
				id: 'hts-component',
				title: 'example',
				translate: 'HTS',
				type: 'collapse',
				icon: 'whatshot',
				children: [


					{
						id: 'special-component',
						title: 'htsspecial',
						translate: 'HTSSPECIAL',
						type: 'item',
						icon: 'timeline',
						url: '/'
					}

				]

			},
			{
				id: 'bonds-component',
				title: 'example',
				translate: 'BONDS',
				type: 'item',
				icon: 'whatshot',
				url: '/'
			},
			{
				id: 'insurance-component',
				title: 'example',
				translate: 'INSURANCE',
				type: 'item',
				icon: 'whatshot',
				url: '/'
			},
			{
				id: 'settings-component',
				title: 'settings',
				translate: 'SETTINGS',
				type: 'collapse',
				icon: 'settings',
				children: [
					{
						id: 'skustore-component',
						title: 'skustore',
						translate: 'SKUSTORE',
						type: 'item',
						icon: 'widgets',
						url: '/skulist'
					}
				]
			}
		]

	}
];

export default navigationConfig;
