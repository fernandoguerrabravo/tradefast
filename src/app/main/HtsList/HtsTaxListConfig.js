import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import HtsTaxList from './HtsTaxList';

i18next.addResourceBundle('en', 'htsTaxCalculatorpage', en);
i18next.addResourceBundle('tr', 'htsTaxCalculatorpage', tr);
i18next.addResourceBundle('ar', 'htsTaxCalculatorpage', ar);

const HtsTaxListConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/htstaxlist',
			component: HtsTaxList
		}
	]
};

export default HtsTaxListConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};

export default ExampleConfig;

*/
