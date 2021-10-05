/* eslint-disable no-return-await */
import { HttpClient } from 'app/main/skustore/helpers/providers.helper';

class FileProvider {
	httpClient = HttpClient;

	async submitFiles(files, refId, sku) {
		return await this.httpClient.post(`https://eclapi.com/sandbox/file/upload?refId=${refId}&sku=${sku}`, files);
	}

	async getFiles(refId, sku) {
		return await this.httpClient.get(`https://eclapi.com/sandbox/file/list?refId=${refId}&sku=${sku}`);
	}
}

export default FileProvider;
