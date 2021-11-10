import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import ProfileContent from './ProfileContent';

const useStyles = makeStyles({
	layoutRoot: {}
});

const Profile = () => {
	const classes = useStyles();

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h1>Reglas de Origen</h1>
				</div>
			}
			contentToolbar={
				<div className="p-24">
					<h4>Reglas y Sugerencias para la determinación de Origen</h4>
				</div>
			}
			content={
				<div className="p-24">
					<ProfileContent />
				</div>
			}
		/>
	);
};

export default Profile;
