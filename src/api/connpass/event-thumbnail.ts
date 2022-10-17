import { useQuery, type UseQueryOptions } from '@sveltestack/svelte-query';
import { resolveAPIError } from '../error';
import ScrapeConnpassEventThumbnailWorker from './event-thumbnail.worker.ts?worker';
import {
	connpassEventsDefaultQueryOptions,
	type ConnpassEventsQueryOptions,
} from './events';
import type { ScrapeConnpassEventThumbnailResponse } from './event-thumbnail.worker';

let workingWorker: Worker | null = null;

export function scrapeConnpassEventThumbnailURL(eventUrl: string) {
	return new Promise<string>((resolve, reject) => {
		const worker = (workingWorker ||= new ScrapeConnpassEventThumbnailWorker());

		const removeListener = () => {
			worker.removeEventListener('message', onSuccess);
			worker.removeEventListener('messageerror', onError);
		};

		const onSuccess = ({ data }: ScrapeConnpassEventThumbnailResponse) => {
			if (data.eventUrl !== eventUrl) return;

			removeListener();
			resolve(data.thumbnailUrl);

			if (data.done) {
				worker.terminate();
				workingWorker = null;
			}
		};

		const onError = (error: any) => {
			removeListener();
			reject(resolveAPIError(error));
		};

		worker.addEventListener('message', onSuccess);
		worker.addEventListener('messageerror', onError);

		worker.postMessage(eventUrl);
	});
}

export function useScrapingConnpassEventThumbnailURLQuery(
	eventUrl: string,
	queryOptions?: UseQueryOptions<string, Error>,
) {
	return useQuery<string, Error>(
		eventUrl,
		() => scrapeConnpassEventThumbnailURL(eventUrl),
		{
			...connpassEventsDefaultQueryOptions,
			...queryOptions,
		},
	);
}

export function refetchScrapingConnpassEventThumbnailURLQuery(
	queryResult: ReturnType<typeof useScrapingConnpassEventThumbnailURLQuery>,
	eventUrl: string,
	queryOptions?: UseQueryOptions<string, Error>,
) {
	queryResult.setOptions(
		eventUrl,
		() => scrapeConnpassEventThumbnailURL(eventUrl),
		{
			...connpassEventsDefaultQueryOptions,
			...queryOptions,
		},
	);
}
