import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles } from '@material-ui/core/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import SkuListContent from './SkuListContent';

const useStyles = makeStyles({
	layoutRoot: {}
});

const SkuList = () => {
	const classes = useStyles();

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h1>Products</h1>
				</div>
			}
			content={
				<div className="p-24">
					<SkuListContent />
				</div>
			}
		/>
	);
};

export default SkuList;
