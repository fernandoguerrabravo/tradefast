import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import MxQuotationContent from './MxQuotationContent';

const useStyles = makeStyles({
	layoutRoot: {}
});

const MxQuotation = () => {
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
					<MxQuotationContent />
				</div>
			}
		/>
	);
};

export default MxQuotation;
