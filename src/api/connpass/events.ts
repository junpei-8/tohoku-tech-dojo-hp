import { useQuery } from '@sveltestack/svelte-query';
import { resolveAPIError } from '../error';
import type { UseQueryOptions } from '@sveltestack/svelte-query';

type YM = `${number}${number}${number}${number}${number}${number}`;
type YMD =
	`${number}${number}${number}${number}${number}${number}${number}${number}`;

/** @see https://connpass.com/about/api/ */
export interface ConnpassEventsAPISearchOptions {
	event_id?: `${number}`;
	keyword?: string;
	keyword_or?: string;
	ym?: YM | [YM, YM];
	ymd?: YMD | [YMD, YMD];
	nickname?: string;
	owner_nickname?: string;
	series_id?: number;
	start?: number;
	order?: typeof ConnpassEventsAPIRequestOrder[keyof typeof ConnpassEventsAPIRequestOrder];
	count?: `${IntRange<1, 101>}`;
	// format: string; // json で固定
}

/** @see https://connpass.com/about/api/ */
export interface ConnpassEventsAPIResponse {
	events: ConnpassEventsAPIResponseEvent[];
	results_available: number;
	results_returned: number;
	results_start: number;
}

/** @see https://connpass.com/about/api/ */
export interface ConnpassEventsAPIResponseEvent {
	event_id: number;
	title: string;
	catch: string;
	description: string;
	event_url: string;
	hashTag: string;
	started_at: string;
	ended_at: string;
	limit: number;
	event_type: string;
	series: {
		id: number;
		title: string;
		url: string;
	};
	address: string;
	place: string;
	lat: number;
	lon: number;
	owner_d: number;
	owner_nickname: string;
	owner_display_name: string;
	accepted: number;
	waiting: number;
	updated_at: string;
}

export type ConnpassEventsQueryOptions = UseQueryOptions<
	ConnpassEventsAPIResponse,
	Error
>;

export const CONNPASS_EVENTS_API_ENDPOINT = 'https://connpass.com/api/v1/event';

export const ConnpassEventsAPIRequestOrder = {
	updatedAt: 1, // 更新日時順
	startedAt: 2, // 開催日時順
	createdAt: 3, // 作成日時順
} as const;

/** satisfies 修飾子が実装されるまで型定義はしないようにする */
export const connpassEventsDefaultQueryOptions = {
	staleTime: 240000,
	cacheTime: 240000,
	retry: 0,
};

export function createConnpassEventsAPISearchParams(
	options?: ConnpassEventsAPISearchOptions,
) {
	return options
		? `?${new URLSearchParams(options as Record<string, any>).toString()}`
		: '';
}

export async function getConnpassEvents(searchParams = '') {
	try {
		const response = await fetch(
			`${CONNPASS_EVENTS_API_ENDPOINT}${searchParams}`,
			{
				method: 'GET',
			},
		);

		if (!response.ok) throw response;

		return response.json() as Promise<ConnpassEventsAPIResponse>;
	} catch (error) {
		throw resolveAPIError(error);
	}
}

export function useConnpassEventsQuery(
	searchOption?: ConnpassEventsAPISearchOptions,
	queryOptions?: ConnpassEventsQueryOptions,
) {
	const searchParams = createConnpassEventsAPISearchParams(searchOption);

	return useQuery<ConnpassEventsAPIResponse, Error>(
		CONNPASS_EVENTS_API_ENDPOINT + searchParams,
		() => getConnpassEvents(searchParams),
		{
			...connpassEventsDefaultQueryOptions,
			...queryOptions,
		},
	);
}

export function refetchConnpassEventQuery(
	queryResult: ReturnType<typeof useConnpassEventsQuery>,
	searchOption?: ConnpassEventsAPISearchOptions,
	queryOptions?: ConnpassEventsQueryOptions,
) {
	const searchParams = createConnpassEventsAPISearchParams(searchOption);

	queryResult.setOptions(
		CONNPASS_EVENTS_API_ENDPOINT + searchParams,
		() => getConnpassEvents(searchParams),
		{
			...connpassEventsDefaultQueryOptions,
			...queryOptions,
		},
	);
}
