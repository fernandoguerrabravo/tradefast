import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles } from '@material-ui/core/styles';
import ResearchContent from './ResearchContent';
import FusePageSimple from '@fuse/core/FusePageSimple';

const useStyles = makeStyles({
	layoutRoot: {}
});


const Research = () => {

	const classes = useStyles();

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h1>Amazon Products Research</h1>
				</div>
			}
			contentToolbar={
				<div className="p-24">
					<h4>Find Products in Amazon Marketplace (US)</h4>
				</div>
			}
			content={
				<div className="p-24">
					<ResearchContent />
				</div>
			}
		/>
	);
}

export default Research;
