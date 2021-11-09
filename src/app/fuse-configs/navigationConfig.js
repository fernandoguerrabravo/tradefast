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
				id: 'mxcalculadora-component',
				title: 'calculator',
				translate: 'CALCULATOR',
				type: 'item',
				icon: 'calculate',
				url: '/MxCalculadora'
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
			},
			{
				id: 'tools-component',
				title: 'example',
				translate: 'TOOLSDECISIONS',
				type: 'collapse',
				icon: 'home_repair_service',
				children: [
					{
						id: 'listresearch-component',
						title: 'listresearch',
						translate: 'RESEARCHMARKET',
						type: 'item',
						icon: 'storefront',
						url: '/research'
					},
					{
						id: 'hts-component',
						title: 'classifications',
						translate: 'CLASSIFICATIONS',
						type: 'item',
						icon: 'ballot',
						url: '/htstaxlist'
					},
					{
						id: 'origin-component',
						title: 'Origin Rules',
						translate: 'ORIGINRULES',
						type: 'item',
						icon: 'ballot',
						url: '/origen'
					}
				]
			},
			{
				id: 'shipping-component',
				title: 'example',
				translate: 'SHIPPINGS',
				type: 'collapse',
				icon: 'public',
				children: [
					{
						id: 'booking-component',
						title: 'example',
						translate: 'BOOKING',
						type: 'item',
						icon: 'local_shipping',
						url: '/MxQuotation'
					}
				]
			}
		]
	}
];

export default navigationConfig;
