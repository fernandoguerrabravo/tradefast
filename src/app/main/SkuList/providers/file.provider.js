/* eslint-disable no-return-await */
import HttpClient from '../helpers/providers.helper';

class FileProvider {
	httpClient = HttpClient;

	async submitFiles(files, refId, sku) {
		return await this.httpClient.post(`https://eclapi.com/sandbox/file/upload?refId=${refId}&sku=${sku}`, files);
	}
}

export default FileProvider;
