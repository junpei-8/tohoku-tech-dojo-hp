/* eslint-disable import/no-named-as-default, @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';
import { readable } from 'svelte/store';
import client from '@/apollo';
import type * as Types from '../../graphql/schema.d';
import type {
	ApolloQueryResult,
	ObservableQuery,
	WatchQueryOptions,
} from '@apollo/client';
import type { Readable } from 'svelte/store';
export type GetNewsListQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetNewsListQuery = {
	__typename?: 'Query';
	news_list: Array<{
		__typename?: 'News';
		id: string;
		title: string;
		html: string;
	}>;
};

export type GetSecondaryNewsListQueryVariables = Types.Exact<{
	[key: string]: never;
}>;

export type GetSecondaryNewsListQuery = {
	__typename?: 'Query';
	news_list: Array<{
		__typename?: 'News';
		id: string;
		title: string;
		html: string;
	}>;
};

export const GetNewsListDoc = gql`
	query getNewsList {
		news_list {
			id
			title
			html
		}
	}
`;
export const GetSecondaryNewsListDoc = gql`
	query getSecondaryNewsList {
		news_list {
			id
			title
			html
		}
	}
`;
export const getNewsList = (
	options: Omit<WatchQueryOptions<GetNewsListQueryVariables>, 'query'>,
): Readable<
	ApolloQueryResult<GetNewsListQuery> & {
		query: ObservableQuery<GetNewsListQuery, GetNewsListQueryVariables>;
	}
> => {
	const q = client.watchQuery({
		query: GetNewsListDoc,
		...options,
	});
	const result = readable<
		ApolloQueryResult<GetNewsListQuery> & {
			query: ObservableQuery<GetNewsListQuery, GetNewsListQueryVariables>;
		}
	>(
		{
			data: {} as any,
			loading: true,
			error: undefined,
			networkStatus: 1,
			query: q,
		},
		(set) => {
			q.subscribe((v: any) => {
				set({ ...v, query: q });
			});
		},
	);
	return result;
};

export const getSecondaryNewsList = (
	options: Omit<WatchQueryOptions<GetSecondaryNewsListQueryVariables>, 'query'>,
): Readable<
	ApolloQueryResult<GetSecondaryNewsListQuery> & {
		query: ObservableQuery<
			GetSecondaryNewsListQuery,
			GetSecondaryNewsListQueryVariables
		>;
	}
> => {
	const q = client.watchQuery({
		query: GetSecondaryNewsListDoc,
		...options,
	});
	const result = readable<
		ApolloQueryResult<GetSecondaryNewsListQuery> & {
			query: ObservableQuery<
				GetSecondaryNewsListQuery,
				GetSecondaryNewsListQueryVariables
			>;
		}
	>(
		{
			data: {} as any,
			loading: true,
			error: undefined,
			networkStatus: 1,
			query: q,
		},
		(set) => {
			q.subscribe((v: any) => {
				set({ ...v, query: q });
			});
		},
	);
	return result;
};
