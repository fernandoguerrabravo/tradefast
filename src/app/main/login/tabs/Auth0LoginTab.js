import { Button, Grid } from '@material-ui/core';
// import auth0Service from 'app/services/auth0Service';
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUserDataAuth0 } from 'app/auth/store/userSlice';
// import { showMessage } from 'app/store/fuse/messageSlice';
import { useAuth0 } from '@auth0/auth0-react';

/* function Auth0LoginTab(props) {
	const dispatch = useDispatch();
	const { loginWithRedirect } = useAuth0();
	useEffect(() => {
		showDialog();

		auth0Service.onAuthenticated(() => {
			dispatch(showMessage({ message: 'Logging in with Auth0' }));

			auth0Service.getUserData().then(tokenData => {
				dispatch(setUserDataAuth0(tokenData));

				dispatch(showMessage({ message: 'Logged in with Auth0' }));
			});
		});
	}, [dispatch]);

	function showDialog() {
		auth0Service.login();
	} */

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<div className="w-full">
			<Button className="w-full my-48" color="primary" variant="contained" onClick={() => loginWithRedirect()}>
				Log In/Sign Up Now
			</Button>
		</div>
	);
};

export default LoginButton;

/*	return (
		<div className="w-full">
			<Button className="w-full my-48" color="primary" variant="contained" onClick={() => loginWithRedirect()}>
				Log In/Sign Up Now
			</Button>
		</div>
	);
}

export default Auth0LoginTab; */
