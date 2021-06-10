import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import RateContent from './RateContent';

const useStyles = makeStyles({
	layoutRoot: {}
});


const Rate = () => {

	const classes = useStyles();

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h1>Landing Cost Tools</h1>
				</div>
			}
			contentToolbar={
				<div className="p-24">
					<h4>Simulate Seller Benefits </h4>
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