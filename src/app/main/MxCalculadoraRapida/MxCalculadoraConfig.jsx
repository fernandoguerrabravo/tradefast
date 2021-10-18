import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import MxCalculadora from './MxCalculadora';

i18next.addResourceBundle('en', 'MxCalculadorapage', en);
i18next.addResourceBundle('tr', 'MxCalculadorapage', tr);
i18next.addResourceBundle('ar', 'MxCalculadorapage', ar);

const MxCalculadoraConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/MxCalculadora',
			component: MxCalculadora
		}
	]
};

export default MxCalculadoraConfig;
