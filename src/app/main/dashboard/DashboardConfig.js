import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import dashboard from './dashboard';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'dashboard', en);
i18next.addResourceBundle('tr', 'dashboard', tr);
i18next.addResourceBundle('ar', 'dashboard', ar);

const DashBoardConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/dashboard',
			component: dashboard
		}
	]
};

export default DashBoardConfig;

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
