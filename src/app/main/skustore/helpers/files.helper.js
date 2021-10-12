/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
export const defaultPrecisionMap = {
	bytes: 0,
	KB: 0,
	MB: 1,
	GB: 1,
	TB: 2,
	PB: 2
};

export const getFormattedSize = (bytes = 0, precision = defaultPrecisionMap) => {
	const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
	if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
		return '?';
	}
	let unitIndex = 0;
	while (bytes >= 1024) {
		bytes /= 1024;
		unitIndex++;
	}
	const unit = units[unitIndex];
	if (typeof precision === 'number') {
		return `${bytes.toFixed(+precision)} ${unit}`;
	}
	return `${bytes.toFixed(precision[unit])} ${unit}`;
};

/**
 * Validate if the size of a file is bigger than the expected size
 *
 * @param bytes Size in bytes
 * @param maximumSize Maximum size in MB
 * @returns `true` is the file size is under or equals to the expected size. IF not, returns `false`
 */
export const checkFileSize = (bytes, maximumSize) => {
	const currentSizeInMB = bytes / 1024 / 1024;
	if (currentSizeInMB >= maximumSize) {
		return false;
	}
	return true;
};

export const checkFileMIMEType = (fileType, allowedMimeTypes) => {
	const mimeTypes = allowedMimeTypes.split(', ');
	for (const mimeType of mimeTypes) {
		let typeCriteria = '';
		if (mimeType.includes('*')) {
			typeCriteria = mimeType.substring(0, mimeType.indexOf('/'));
		} else if (mimeType.includes('.') && !mimeTypes.includes('/')) {
			typeCriteria = mimeType.substring(mimeType.indexOf('.') + 1);
		} else {
			typeCriteria = mimeType;
		}
		if (fileType.includes(typeCriteria)) {
			return true;
		}
	}
	return false;
};
