import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles } from '@material-ui/core/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import MxCalculadoraContent from './MxCalculadoraContent';

const useStyles = makeStyles({
	layoutRoot: {}
});

const MxCalculadora = () => {
	const classes = useStyles();

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h1>Quick Calculator Mx-Tx</h1>
				</div>
			}
			/* contentToolbar={
				<div className="p-24">
					<h4></h4>
				</div>
			} */
			content={
				<div className="p-24">
					<MxCalculadoraContent />
				</div>
			}
		/>
	);
};

export default MxCalculadora;
