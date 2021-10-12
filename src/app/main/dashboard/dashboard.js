/* eslint-disable jsx-a11y/heading-has-content */
import FusePageCarded from '@fuse/core/FusePageCarded';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import DashboardContent from './DashboardContent';

const useStyles = makeStyles({
	layoutRoot: {}
});

function SimpleFullWidthSample() {
	const classes = useStyles();

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h1>Dashboard</h1>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<h4 />
				</div>
			}
			content={
				<div className="p-24">
					<h4 />
					<br />
					<DashboardContent />
				</div>
			}
		/>
	);
}

export default SimpleFullWidthSample;
