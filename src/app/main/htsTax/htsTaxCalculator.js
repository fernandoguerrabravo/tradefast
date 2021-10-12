/* eslint-disable react-hooks/rules-of-hooks */
import { makeStyles } from '@material-ui/core/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import HtsTaxContent from './htsTaxContent';

const useStyles = makeStyles({
	layoutRoot: {}
});

const htsTaxCalculator = () => {
	const classes = useStyles();

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h1>Import Tax Calculator</h1>
				</div>
			}
			contentToolbar={
				<div className="p-24">
					<h4>Find the Duties to Pay in US</h4>
				</div>
			}
			content={
				<div className="p-24">
					<HtsTaxContent />
				</div>
			}
		/>
	);
};

export default htsTaxCalculator;
