/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Divider, FormLabel, FormControlLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { green, red, blue } from '@material-ui/core/colors';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import FormControl from '@material-ui/core/FormControl';
import AttachmentIcon from '@material-ui/icons/Attachment';
import PublishIcon from '@material-ui/icons/Publish';
import FileProvider from '../providers/file.provider';
import { checkFileMIMEType, checkFileSize, getFormattedSize } from '../helpers/files.helper';

const blobToBase64 = async file =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});

const useStyles = makeStyles({
	table: {
		minWidth: 650
	}
});

const styles2 = makeStyles(theme => ({
	icons: {
		fontSize: 'small',
		backgroundColor: red[500],
		color: red[500]
	},

	formControl2: {
		minWidth: 300,
		padding: theme.spacing(1)
	},

	input: {
		display: 'none'
	},

	formControl1: {
		minWidth: 100,
		padding: theme.spacing(1)
	}
}));

const SkuStoreFiles = ({ skus, idcliente }) => {
	const classes2 = styles2();
	const classes = useStyles();

	const MAXIMUM_FILES_LIMIT = 5;
	/**
	 * Size in MB
	 */
	const MAXIMUM_FILE_SIZE = 2;
	const ALLOWED_FORMATS = '.pdf, .doc, .docx, .odt, image/*';

	const [files, setFiles] = useState([]);
	// const [refId, setRefId] = useState(idcliente);
	// const [skur, setSku] = useState('');

	const [submitting, setSubmitting] = useState(false);

	const getCurrentFiles = async event => {
		const rawFiles = event.target.files;
		const fileList = []; // WIll contain an array of type File[]
		if (!rawFiles) {
			return;
		}
		if (rawFiles instanceof Array) {
			rawFiles.forEach(file => fileList.push(file));
		} else {
			const rawFilesArray = Array.from(rawFiles);
			rawFilesArray.forEach(file => fileList.push(file));
		}
		const finalFileList = [];
		for (const file of fileList) {
			const extensionSeparatorIndex = file.name.lastIndexOf('.');
			const formattedName = file.name.substring(0, extensionSeparatorIndex);
			const extension = file.name.substr(extensionSeparatorIndex);
			const encodedData = await blobToBase64(file);
			const formattedFile = {
				name: formattedName,
				extension,
				file: encodedData?.toString() ?? '',
				type: 'append',
				size: file.size
			};
			if (files.find(appendedFile => appendedFile.name === formattedFile.name)) {
				Swal.fire({
					icon: 'info',
					title: `The file ${formattedFile.name + formattedFile.extension} is already added`
				});
				break;
			}
			if (!checkFileMIMEType(file.type, ALLOWED_FORMATS)) {
				Swal.fire({
					icon: 'warning',
					title: 'Please select another file (Supported formats: images and PDF)',
					html: `<small class="text-muted">The file ${file.name} is not supported</small>`
				});
				break;
			}
			if (!checkFileSize(file.size, MAXIMUM_FILE_SIZE)) {
				Swal.fire({
					icon: 'warning',
					title: `The maximum file size is ${MAXIMUM_FILE_SIZE}MB`,
					html: `<small class="text-muted">The file ${file.name} have a size of ${getFormattedSize(
						file.size,
						2
					)}</small>`
				});
				break;
			}
			if (files.length < MAXIMUM_FILES_LIMIT) {
				finalFileList.push(formattedFile);
			} else {
				Swal.fire({
					icon: 'info',
					title: `The maximum file quantity to upload is ${MAXIMUM_FILES_LIMIT}`
				});
				break;
			}
		}
		if (finalFileList.length > 0) {
			setFiles([...files, ...finalFileList]);
		}
		event.target.value = event.target.defaultValue; // Reset input cached value
	};

	/* const handleRefIdChange = (event) => {
         if (event.isTrusted) {
             setRefId(event.target.value)
         }
     } 
 
     const handleSkuChange = (event) => {
         if (event.isTrusted) {
             setSku(event.target.value);
         }
     }v */

	const handleFilesSubmit = async event => {
		event.preventDefault();
		if (event.isTrusted && skus !== '') {
			const proceed = await Swal.fire({
				title: 'The files will be uploaded to the S3 bucket. Proceed?',
				text: `The destination directory is /${idcliente}/${skus}`,
				icon: 'question',
				confirmButtonText: 'Yes',
				cancelButtonText: 'No. Abort action',
				showCancelButton: true
			});
			if (!proceed?.isConfirmed) {
				return;
			}
			setSubmitting(true);
			try {
				const response = (await new FileProvider().submitFiles(files, idcliente, skus)).data;
				if (response?.value?.fileUpload) {
					await Swal.fire({
						title: `${files.length > 1 ? 'Files' : 'File'} uploaded successfully`,
						icon: 'success'
					});
					setFiles([]);
				} else {
					await Swal.fire({
						title: response.error.message ?? 'Unexpected error',
						icon: 'error'
					});
				}
			} catch (reason) {
				Swal.fire({
					title: 'Unexpected error',
					text: 'Please try again later',
					icon: 'error'
				});
			}
			setSubmitting(false);
			event.target.reset();
		} else {
			Swal.fire({
				title: 'Opps!!',
				text: 'Please enter a valid SKU',
				icon: 'Warning'
			});
		}
	};

	const removeFile = (event, index) => {
		if (event.isTrusted) {
			const currentFiles = files;
			currentFiles.splice(index, 1);
			setFiles([...currentFiles]);
		}
	};

	useEffect(() => {
		document.title = 'S3 REST API w/ File Upload Example';
	}, []);

	return (
		<form onSubmit={handleFilesSubmit}>
			<Typography className={classes2.formControl2} style={{ color: '#F5981E' }} gutterBottom>
				<strong>Upload Documents and Images</strong>&nbsp;&nbsp;
				<Tooltip title="you can later upload documents or images of your product.">
					<InfoIcon fontSize="small" color="action" />
				</Tooltip>
			</Typography>
			<FormControl className={classes2.formControl1}>
				<TextField
					id="file1"
					name="file1"
					type="file"
					onChange={getCurrentFiles}
					variant="outlined"
					className={classes2.input}
					multiple
				/>
				<label htmlFor="file1">
					<Button
						startIcon={<AttachmentIcon />}
						size="large"
						variant="outlined"
						style={{ color: red[500] }}
						component="span"
					>
						Select File ...
					</Button>
				</label>
			</FormControl>

			{files.length > 0 ? (
				<FormControl className={classes2.formControl2}>
					<Button startIcon={<PublishIcon />} size="large" variant="outlined" color="primary" type="submit">
						Upload List
					</Button>
				</FormControl>
			) : null}

			<Typography className={classes2.formControl2} style={{ color: blue[800] }} gutterBottom>
				{files.length > 0 ? `Files in queue (${files.length}):` : 'No files in queue yet'}
			</Typography>
			{files.length > 0 ? (
				<TableContainer className={classes2.formControl2}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>File Name</TableCell>
								<TableCell>File Extension</TableCell>
								<TableCell>File Size</TableCell>
								<TableCell>Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{files.map((file, index) => {
								return (
									<TableRow key={index}>
										<TableCell>{file.name}</TableCell>
										<TableCell>{file.extension}</TableCell>
										<TableCell>{getFormattedSize(file.size, 2)}</TableCell>
										<TableCell>
											<Button
												type="button"
												onClick={event => removeFile(event, index)}
												disabled={submitting}
											>
												Remove
											</Button>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			) : null}
		</form>
	);
};
