import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import Door2door from './Door2door';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'door2doorpage', en);
i18next.addResourceBundle('tr', 'door2doorpage', tr);
i18next.addResourceBundle('ar', 'door2doorpage', ar);

const Door2doorConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/door2door',
			component: Door2door
		}
	]
};

export default Door2doorConfig;
