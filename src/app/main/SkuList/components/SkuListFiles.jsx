/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import FileProvider from '../providers/file.provider';
import { getFormattedSize } from '../helpers/files.helper';
import SkuStoreFiles from './SkuStoreFiles';

const useStyles = makeStyles(theme => ({
	type: {
		padding: theme.spacing(1),
		color: theme.palette.text.secondary
	},
	paper: {
		padding: theme.spacing(3),
		color: theme.palette.text.secondary
	}
}));

const Lister = ({ idcliente, codigo }) => {
	const classes = useStyles();
	const [files, setFiles] = useState([]);
	const [refId, setRefId] = useState(idcliente);
	const [sku, setSku] = useState(codigo);
	const [submitting, setSubmitting] = useState(false);

	const handleRefIdChange = event => {
		if (event.isTrusted) {
			setRefId(event.target.value);
		}
	};

	const handleSkuChange = event => {
		if (event.isTrusted) {
			setSku(event.target.value);
		}
	};

	const getFiles = async event => {
		event.preventDefault();
		setSubmitting(true);
		try {
			const files = (await new FileProvider().getFiles(refId, sku)).data.value;
			setFiles(files);
		} catch (reason) {
			console.warn(reason);
		}
		setSubmitting(false);
	};

	useEffect(() => {
		document.title = 'File Lister Example - S3 REST API';
	}, []);

	return (
		<Grid item xs={6}>
			<Paper className={classes.paper}>
				<Button color="primary" variant="contained" onClick={getFiles}>
					{submitting ? 'Searching...' : 'Update and Show Files'}
				</Button>
				<p />
				<Typography>{files.length > 0 ? 'Retrieved files' : 'No files to show'}</Typography>
				{files.length > 0 ? (
					<Table sx={{ minWidth: 800 }} size="small" aria-label="a dense table">
						<TableHead>
							<TableRow>
								<TableCell>File Name</TableCell>
								<TableCell>File Size</TableCell>
								<TableCell>Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{files.map((file, index) => {
								return (
									<TableRow key={index}>
										<TableCell>{file.name + file.extension}</TableCell>
										<TableCell>{getFormattedSize(file.size, 2)}</TableCell>
										<TableCell>
											<Button href={file.file} download variant="outlined">
												Download
											</Button>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				) : null}
			</Paper>
			<br />
			<Paper className={classes.paper}>
				<SkuStoreFiles skus={codigo} idcliente={idcliente} />
			</Paper>
		</Grid>
	);
};

export default Lister;
