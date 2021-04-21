import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import Research from './Research';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';


i18next.addResourceBundle('en', 'researchpage', en);
i18next.addResourceBundle('tr', 'researchpage', tr);
i18next.addResourceBundle('ar', 'researchpage', ar);


const DashBoardConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/research',
			component: Research
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
