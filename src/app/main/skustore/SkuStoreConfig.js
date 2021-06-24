import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import SkuStore from './SkuStore';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';


i18next.addResourceBundle('en', 'skustorepage', en);
i18next.addResourceBundle('tr', 'skustorepage', tr);
i18next.addResourceBundle('ar', 'skustorepage', ar);


const SkuStoreConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/skustore',
            component: SkuStore
        }
    ]
};

export default SkuStoreConfig;

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
