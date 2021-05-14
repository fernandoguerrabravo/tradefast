import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import  Rate from './Rate';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'ratepage', en);
i18next.addResourceBundle('tr', 'ratepage', tr);
i18next.addResourceBundle('ar', 'ratepage', ar);


const RateConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/rate',
			component: Rate
		}
	]
};

export default RateConfig;