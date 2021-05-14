import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles } from '@material-ui/core/styles';
import RateContent from './RateContent';

const useStyles = makeStyles({
	layoutRoot: {}
});


const Rate = () => {

	const classes = useStyles();

	return (
		<FusePageCarded
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h1>Shipping Door to Door Rates</h1>
				</div>
			}
			contentToolbar={
				<div className="p-24">
					<h4>Quote your Shipping Cost to US</h4>
				</div>
			}
			content={
				<div className="p-24">
					<RateContent />
				</div>
			}
		/>
	);
}

export default Rate;