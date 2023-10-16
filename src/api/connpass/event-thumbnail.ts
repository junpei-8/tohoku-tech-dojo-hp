import { useQuery, type UseQueryOptions } from '@sveltestack/svelte-query';
import { resolveAPIError } from '../error';
import {
	connpassEventsDefaultQueryOptions,
	CONNPASS_EVENTS_API_ENDPOINT,
} from './events';

const createConnpassEventThumbnailUri = (id: number) =>
	`${CONNPASS_EVENTS_API_ENDPOINT}/thumbnail?id=${id}`;

export async function getConnpassEventThumbnailByUri(uri: string) {
	try {
		const response = await fetch(uri, {
			method: 'GET',
		});

		if (!response.ok) throw response;

		const url = (await response.json()).url;

		return url;
	} catch (error) {
		throw resolveAPIError(error);
	}
}

export function useConnpassEventThumbnailQuery(
	eventId: number,
	queryOptions?: UseQueryOptions<string, Error>,
) {
	const url = createConnpassEventThumbnailUri(eventId);

	return useQuery<string, Error>(
		url,
		() => getConnpassEventThumbnailByUri(url),
		{
			...connpassEventsDefaultQueryOptions,
			...queryOptions,
		},
	);
}

export function refetchConnpassEventThumbnailQuery(
	queryResult: ReturnType<typeof useConnpassEventThumbnailQuery>,
	eventId: number,
	queryOptions?: UseQueryOptions<string, Error>,
) {
	const url = createConnpassEventThumbnailUri(eventId);

	queryResult.setOptions(url, () => getConnpassEventThumbnailByUri(url), {
		...connpassEventsDefaultQueryOptions,
		...queryOptions,
	});
}
