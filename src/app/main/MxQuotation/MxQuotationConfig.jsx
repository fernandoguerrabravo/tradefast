import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import MxQuotation from './MxQuotation';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'MxQuotationpage', en);
i18next.addResourceBundle('tr', 'MxQuotationpage', tr);
i18next.addResourceBundle('ar', 'MxQuotationpage', ar);

const MxQuotationConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/MxQuotation',
			component: MxQuotation
		}
	]
};

export default MxQuotationConfig;
