import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import Door2doorContent from './Door2doorContent';

const useStyles = makeStyles({
	layoutRoot: {}
});


const Door2door = () => {

	const classes = useStyles();

	return (

		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h1>Shipping Quotation Tools</h1>
				</div>
			}
			contentToolbar={
				<div className="p-24">
					<h4>Door to Door Shipping Quotation</h4>
				</div>
			}
			content={
				<div className="p-24">
					<Door2doorContent />
				</div>
			}
		/>
	);
}

export default Door2door;