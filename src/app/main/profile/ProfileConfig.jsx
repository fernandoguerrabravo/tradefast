import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import Profile from './Profile';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'profilepage', en);
i18next.addResourceBundle('tr', 'profilepage', tr);
i18next.addResourceBundle('ar', 'profilepage', ar);

const ProfileConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/profile',
			component: Profile
		}
	]
};

export default ProfileConfig;
