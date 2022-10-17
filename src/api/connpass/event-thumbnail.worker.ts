export type ScrapeConnpassEventThumbnailRequest = MessageEvent<string>;

export type ScrapeConnpassEventThumbnailResponse = MessageEvent<{
	eventUrl: string;
	thumbnailUrl: string;
	done: boolean;
}>;

const SHARED_IMG_META_TAG_REG = /<meta.*property="og:image".*content=".*"/;

const SHARED_IMG_META_TAG_CONTENT_ATTR_REG = /content=/;

let workingCount = 0;

// message（リクエスト）を受け取る
addEventListener(
	'message',
	async ({ data: eventUrl }: ScrapeConnpassEventThumbnailRequest) => {
		workingCount++;

		const eventPageResponse = await fetch(eventUrl);

		if (!eventPageResponse.ok) throw eventPageResponse;

		const html = await eventPageResponse.text();

		const splitSharedImgMetaTag = html
			.match(SHARED_IMG_META_TAG_REG)?.[0]
			.split('"');

		let thumbnailUrl = '';

		if (splitSharedImgMetaTag) {
			const max = splitSharedImgMetaTag.length - 1;
			for (let i = max; i > 0; i--) {
				const backValue = splitSharedImgMetaTag[i - 1];
				if (backValue.match(SHARED_IMG_META_TAG_CONTENT_ATTR_REG)) {
					thumbnailUrl = splitSharedImgMetaTag[i];
					break;
				}
			}
		}

		workingCount--;

		const response: ScrapeConnpassEventThumbnailResponse['data'] = {
			eventUrl,
			thumbnailUrl,
			done: workingCount === 0,
		};

		postMessage(response);
	},
);
