import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import ListResearch from './ListResearch'

i18next.addResourceBundle('en', 'htsTaxCalculatorpage', en);
i18next.addResourceBundle('tr', 'htsTaxCalculatorpage', tr);
i18next.addResourceBundle('ar', 'htsTaxCalculatorpage', ar);


const ListResearchConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/listResearch',
			component: ListResearch
		}
	]
};

export default ListResearchConfig;