import Card from '@material-ui/core/Card';
import { styled, darken } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import LoginButton from './tabs/Auth0LoginTab';
// import FirebaseLoginTab from './tabs/FirebaseLoginTab';
// import JWTLoginTab from './tabs/JWTLoginTab';

const Root = styled('div')(({ theme }) => ({
	background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
		theme.palette.primary.dark,
		0.5
	)} 100%)`,
	color: theme.palette.primary.contrastText,

	'& .Login-leftSection': {},

	'& .Login-rightSection': {
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	}
}));

function Login() {
	const [selectedTab, setSelectedTab] = useState(0);

	return (
		<Root className="flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24">
			<motion.div
				initial={{ opacity: 0, scale: 0.6 }}
				animate={{ opacity: 1, scale: 1 }}
				className="flex w-full max-w-400 md:max-w-3xl rounded-20 shadow-2xl overflow-hidden"
			>
				<Card
					className="Login-leftSection flex flex-col w-full max-w-sm items-center justify-center shadow-0"
					square
				>
					<CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }}>
							<div className="flex items-center mb-48">
								<img
									className="logo-icon w-200"
									src="https://fotos-ecl.s3.amazonaws.com/logos-global-selling/logo_transparent_background.png"
									alt="logo"
								/>
								<div className="border-l-1 mr-4 w-1 h-40" />
							</div>
						</motion.div>
						<img src="https://fotos-ecl.s3.amazonaws.com/113066576_fb-image.jpg" alt="logo" />
						<LoginButton />
					</CardContent>
					<div className="flex flex-col items-center justify-center pb-32">
						<div />
					</div>
				</Card>
				<div className="Login-rightSection hidden md:flex flex-1 items-center justify-center p-64">
					<div className="max-w-320">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
						>
							<Typography variant="h3" color="inherit" className="font-semibold leading-tight">
								Welcome <br />
								to the <br /> Global Selling Accelerator!
							</Typography>
						</motion.div>
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}>
							<Typography variant="subtitle1" color="inherit" className="mt-32">
								Accelrate your Global Seller Experience!
							</Typography>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</Root>
	);
}

export default Login;
