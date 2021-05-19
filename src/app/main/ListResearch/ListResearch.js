import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles } from '@material-ui/core/styles';
import ListResearchContent from './ListResearchContent';
import FusePageSimple from '@fuse/core/FusePageSimple';

const useStyles = makeStyles({
	layoutRoot: {}
});

const ListResearch = () => {

	const classes = useStyles();

	return (

		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h1>Product Research Tool</h1>
				</div>
			}
			/*contentToolbar={
				<div className="p-24">
					<h4></h4>
				</div>
			} */
			content={
				<div className="p-24">
					<ListResearchContent />
				</div>
			}
		/>
	);
}

export default ListResearch;
