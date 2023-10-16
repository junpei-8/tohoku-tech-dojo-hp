import { writable } from 'svelte/store';
import type { News } from '@/graphql/schema';

export type SelectedNews = Pick<News, 'id' | 'title' | 'html'> | null;

export const selectedNews = writable<SelectedNews>();
