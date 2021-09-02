import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import SkuList from './SkuList';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'skuslistpage', en);
i18next.addResourceBundle('tr', 'skuslistpage', tr);
i18next.addResourceBundle('ar', 'skulistpage', ar);

const SkuListConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/skulist',
			component: SkuList
		}
	]
};

export default SkuListConfig;

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
