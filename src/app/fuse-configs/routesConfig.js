import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import DashboardConfig from 'app/main/dashboard/DashboardConfig';
import ResearchConfig from 'app/main/research/ResearchConfig';
import htsTaxConfig from 'app/main/htsTax/htsTaxConfig';
import RateConfig from 'app/main/rate_calculator/RateConfig';
import ListResearchConfig from 'app/main/ListResearch/ListResearchConfig';


const routeConfigs = [

	DashboardConfig,
	ResearchConfig,
	htsTaxConfig,
	RateConfig,
	ListResearchConfig
	

];

const routes = [
	// if you want to make whole app auth protected by default change defaultAuth for example:
	// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
	// The individual route configs which has auth option won't be overridden.
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/dashboard" />
	}
];

export default routes;
