export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/**
	 * Define a Relay Cursor type:
	 * https://relay.dev/graphql/connections.htm#sec-Cursor
	 */
	Cursor: any;
	/** The builtin Time type */
	Time: any;
};

/** CreateNewsInput is used for create News object. Input was generated by ent. */
export type CreateNewsInput = {
	createdAt?: InputMaybe<Scalars['Time']>;
	html: Scalars['String'];
	markdown: Scalars['String'];
	tagIDs?: InputMaybe<Array<Scalars['ID']>>;
	title: Scalars['String'];
	uid?: InputMaybe<Scalars['Int']>;
	updatedAt?: InputMaybe<Scalars['Time']>;
	userID: Scalars['ID'];
};

/** CreateTagInput is used for create Tag object. Input was generated by ent. */
export type CreateTagInput = {
	createdAt?: InputMaybe<Scalars['Time']>;
	newsListIDs: Array<Scalars['ID']>;
	title: Scalars['String'];
};

/** CreateUserInput is used for create User object. Input was generated by ent. */
export type CreateUserInput = {
	createdAt?: InputMaybe<Scalars['Time']>;
	createdNewsListIDs?: InputMaybe<Array<Scalars['ID']>>;
	email: Scalars['String'];
	name: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['Time']>;
};

export type Mutation = {
	__typename?: 'Mutation';
	createNews: News;
	createTag: Tag;
	createTags: Array<Tag>;
	createUser: User;
	deleteNews: Scalars['String'];
	deleteTag: Scalars['String'];
	deleteUser: Scalars['String'];
	updateNews: News;
	updateUser: User;
};

export type MutationCreateNewsArgs = {
	input: CreateNewsInput;
};

export type MutationCreateTagArgs = {
	input: CreateTagInput;
};

export type MutationCreateTagsArgs = {
	inputs: Array<CreateTagInput>;
};

export type MutationCreateUserArgs = {
	input: CreateUserInput;
};

export type MutationDeleteNewsArgs = {
	id: Scalars['ID'];
};

export type MutationDeleteTagArgs = {
	id: Scalars['ID'];
};

export type MutationDeleteUserArgs = {
	id: Scalars['ID'];
};

export type MutationUpdateNewsArgs = {
	id: Scalars['ID'];
	input: UpdateNewsInput;
};

export type MutationUpdateUserArgs = {
	id: Scalars['ID'];
	input: UpdateUserInput;
};

export type News = Node & {
	__typename?: 'News';
	createdAt: Scalars['Time'];
	creatorID: Scalars['ID'];
	html: Scalars['String'];
	id: Scalars['ID'];
	markdown: Scalars['String'];
	newsCreator: User;
	tags?: Maybe<Array<Tag>>;
	title: Scalars['String'];
	uid: Scalars['Int'];
	updatedAt?: Maybe<Scalars['Time']>;
};

/** Ordering options for News connections */
export type NewsOrder = {
	/** The ordering direction. */
	direction?: OrderDirection;
	/** The field by which to order NewsSlice. */
	field: NewsOrderField;
};

/** Properties by which News connections can be ordered. */
export enum NewsOrderField {
	CreatedAt = 'CREATED_AT',
	CreatorId = 'CREATOR_ID',
	Html = 'HTML',
	Markdown = 'MARKDOWN',
	Title = 'TITLE',
	Uid = 'UID',
	UpdatedAt = 'UPDATED_AT',
}

/**
 * NewsWhereInput is used for filtering News objects. Input was generated by
 * ent.
 */
export type NewsWhereInput = {
	and?: InputMaybe<Array<NewsWhereInput>>;
	/** created_at field predicates */
	createdAt?: InputMaybe<Scalars['Time']>;
	createdAtGT?: InputMaybe<Scalars['Time']>;
	createdAtGTE?: InputMaybe<Scalars['Time']>;
	createdAtIn?: InputMaybe<Array<Scalars['Time']>>;
	createdAtLT?: InputMaybe<Scalars['Time']>;
	createdAtLTE?: InputMaybe<Scalars['Time']>;
	createdAtNEQ?: InputMaybe<Scalars['Time']>;
	createdAtNotIn?: InputMaybe<Array<Scalars['Time']>>;
	/** creator_id field predicates */
	creatorID?: InputMaybe<Scalars['ID']>;
	creatorIDIn?: InputMaybe<Array<Scalars['ID']>>;
	creatorIDNEQ?: InputMaybe<Scalars['ID']>;
	creatorIDNotIn?: InputMaybe<Array<Scalars['ID']>>;
	/** tags edge predicates */
	hasTags?: InputMaybe<Scalars['Boolean']>;
	hasTagsWith?: InputMaybe<Array<TagWhereInput>>;
	/** user edge predicates */
	hasUser?: InputMaybe<Scalars['Boolean']>;
	hasUserWith?: InputMaybe<Array<UserWhereInput>>;
	/** html field predicates */
	html?: InputMaybe<Scalars['String']>;
	htmlContains?: InputMaybe<Scalars['String']>;
	htmlContainsFold?: InputMaybe<Scalars['String']>;
	htmlEqualFold?: InputMaybe<Scalars['String']>;
	htmlGT?: InputMaybe<Scalars['String']>;
	htmlGTE?: InputMaybe<Scalars['String']>;
	htmlHasPrefix?: InputMaybe<Scalars['String']>;
	htmlHasSuffix?: InputMaybe<Scalars['String']>;
	htmlIn?: InputMaybe<Array<Scalars['String']>>;
	htmlLT?: InputMaybe<Scalars['String']>;
	htmlLTE?: InputMaybe<Scalars['String']>;
	htmlNEQ?: InputMaybe<Scalars['String']>;
	htmlNotIn?: InputMaybe<Array<Scalars['String']>>;
	/** id field predicates */
	id?: InputMaybe<Scalars['ID']>;
	idGT?: InputMaybe<Scalars['ID']>;
	idGTE?: InputMaybe<Scalars['ID']>;
	idIn?: InputMaybe<Array<Scalars['ID']>>;
	idLT?: InputMaybe<Scalars['ID']>;
	idLTE?: InputMaybe<Scalars['ID']>;
	idNEQ?: InputMaybe<Scalars['ID']>;
	idNotIn?: InputMaybe<Array<Scalars['ID']>>;
	/** markdown field predicates */
	markdown?: InputMaybe<Scalars['String']>;
	markdownContains?: InputMaybe<Scalars['String']>;
	markdownContainsFold?: InputMaybe<Scalars['String']>;
	markdownEqualFold?: InputMaybe<Scalars['String']>;
	markdownGT?: InputMaybe<Scalars['String']>;
	markdownGTE?: InputMaybe<Scalars['String']>;
	markdownHasPrefix?: InputMaybe<Scalars['String']>;
	markdownHasSuffix?: InputMaybe<Scalars['String']>;
	markdownIn?: InputMaybe<Array<Scalars['String']>>;
	markdownLT?: InputMaybe<Scalars['String']>;
	markdownLTE?: InputMaybe<Scalars['String']>;
	markdownNEQ?: InputMaybe<Scalars['String']>;
	markdownNotIn?: InputMaybe<Array<Scalars['String']>>;
	not?: InputMaybe<NewsWhereInput>;
	or?: InputMaybe<Array<NewsWhereInput>>;
	/** title field predicates */
	title?: InputMaybe<Scalars['String']>;
	titleContains?: InputMaybe<Scalars['String']>;
	titleContainsFold?: InputMaybe<Scalars['String']>;
	titleEqualFold?: InputMaybe<Scalars['String']>;
	titleGT?: InputMaybe<Scalars['String']>;
	titleGTE?: InputMaybe<Scalars['String']>;
	titleHasPrefix?: InputMaybe<Scalars['String']>;
	titleHasSuffix?: InputMaybe<Scalars['String']>;
	titleIn?: InputMaybe<Array<Scalars['String']>>;
	titleLT?: InputMaybe<Scalars['String']>;
	titleLTE?: InputMaybe<Scalars['String']>;
	titleNEQ?: InputMaybe<Scalars['String']>;
	titleNotIn?: InputMaybe<Array<Scalars['String']>>;
	/** uid field predicates */
	uid?: InputMaybe<Scalars['Int']>;
	uidGT?: InputMaybe<Scalars['Int']>;
	uidGTE?: InputMaybe<Scalars['Int']>;
	uidIn?: InputMaybe<Array<Scalars['Int']>>;
	uidLT?: InputMaybe<Scalars['Int']>;
	uidLTE?: InputMaybe<Scalars['Int']>;
	uidNEQ?: InputMaybe<Scalars['Int']>;
	uidNotIn?: InputMaybe<Array<Scalars['Int']>>;
	/** updated_at field predicates */
	updatedAt?: InputMaybe<Scalars['Time']>;
	updatedAtGT?: InputMaybe<Scalars['Time']>;
	updatedAtGTE?: InputMaybe<Scalars['Time']>;
	updatedAtIn?: InputMaybe<Array<Scalars['Time']>>;
	updatedAtIsNil?: InputMaybe<Scalars['Boolean']>;
	updatedAtLT?: InputMaybe<Scalars['Time']>;
	updatedAtLTE?: InputMaybe<Scalars['Time']>;
	updatedAtNEQ?: InputMaybe<Scalars['Time']>;
	updatedAtNotIn?: InputMaybe<Array<Scalars['Time']>>;
	updatedAtNotNil?: InputMaybe<Scalars['Boolean']>;
};

/**
 * An object with an ID. Follows the [Relay Global Object Identification
 * Specification](https://relay.dev/graphql/objectidentification.htm)
 */
export type Node = {
	/** The id of the object. */
	id: Scalars['ID'];
};

/**
 * Possible directions in which to order a list of items when provided an
 * `orderBy` argument.
 */
export enum OrderDirection {
	/** Specifies an ascending order for a given `orderBy` argument. */
	Asc = 'ASC',
	/** Specifies a descending order for a given `orderBy` argument. */
	Desc = 'DESC',
}

/**
 * Information about pagination in a connection.
 * https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo
 */
export type PageInfo = {
	__typename?: 'PageInfo';
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars['Cursor']>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean'];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean'];
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars['Cursor']>;
};

export type Query = {
	__typename?: 'Query';
	news_list: Array<News>;
	/** Fetches an object given its ID. */
	node?: Maybe<Node>;
	/** Lookup nodes by a list of IDs. */
	nodes: Array<Maybe<Node>>;
	tags: Array<Tag>;
	users: Array<User>;
};

export type QueryNodeArgs = {
	id: Scalars['ID'];
};

export type QueryNodesArgs = {
	ids: Array<Scalars['ID']>;
};

export type Tag = Node & {
	__typename?: 'Tag';
	createdAt: Scalars['Time'];
	id: Scalars['ID'];
	newsTags: Array<News>;
	title: Scalars['String'];
};

/** Ordering options for Tag connections */
export type TagOrder = {
	/** The ordering direction. */
	direction?: OrderDirection;
	/** The field by which to order Tags. */
	field: TagOrderField;
};

/** Properties by which Tag connections can be ordered. */
export enum TagOrderField {
	CreatedAt = 'CREATED_AT',
	Title = 'TITLE',
}

/** TagWhereInput is used for filtering Tag objects. Input was generated by ent. */
export type TagWhereInput = {
	and?: InputMaybe<Array<TagWhereInput>>;
	/** created_at field predicates */
	createdAt?: InputMaybe<Scalars['Time']>;
	createdAtGT?: InputMaybe<Scalars['Time']>;
	createdAtGTE?: InputMaybe<Scalars['Time']>;
	createdAtIn?: InputMaybe<Array<Scalars['Time']>>;
	createdAtLT?: InputMaybe<Scalars['Time']>;
	createdAtLTE?: InputMaybe<Scalars['Time']>;
	createdAtNEQ?: InputMaybe<Scalars['Time']>;
	createdAtNotIn?: InputMaybe<Array<Scalars['Time']>>;
	/** news_list edge predicates */
	hasNewsList?: InputMaybe<Scalars['Boolean']>;
	hasNewsListWith?: InputMaybe<Array<NewsWhereInput>>;
	/** id field predicates */
	id?: InputMaybe<Scalars['ID']>;
	idGT?: InputMaybe<Scalars['ID']>;
	idGTE?: InputMaybe<Scalars['ID']>;
	idIn?: InputMaybe<Array<Scalars['ID']>>;
	idLT?: InputMaybe<Scalars['ID']>;
	idLTE?: InputMaybe<Scalars['ID']>;
	idNEQ?: InputMaybe<Scalars['ID']>;
	idNotIn?: InputMaybe<Array<Scalars['ID']>>;
	not?: InputMaybe<TagWhereInput>;
	or?: InputMaybe<Array<TagWhereInput>>;
	/** title field predicates */
	title?: InputMaybe<Scalars['String']>;
	titleContains?: InputMaybe<Scalars['String']>;
	titleContainsFold?: InputMaybe<Scalars['String']>;
	titleEqualFold?: InputMaybe<Scalars['String']>;
	titleGT?: InputMaybe<Scalars['String']>;
	titleGTE?: InputMaybe<Scalars['String']>;
	titleHasPrefix?: InputMaybe<Scalars['String']>;
	titleHasSuffix?: InputMaybe<Scalars['String']>;
	titleIn?: InputMaybe<Array<Scalars['String']>>;
	titleLT?: InputMaybe<Scalars['String']>;
	titleLTE?: InputMaybe<Scalars['String']>;
	titleNEQ?: InputMaybe<Scalars['String']>;
	titleNotIn?: InputMaybe<Array<Scalars['String']>>;
};

/** UpdateNewsInput is used for update News object. Input was generated by ent. */
export type UpdateNewsInput = {
	addTagIDs?: InputMaybe<Array<Scalars['ID']>>;
	clearUpdatedAt?: InputMaybe<Scalars['Boolean']>;
	html?: InputMaybe<Scalars['String']>;
	markdown?: InputMaybe<Scalars['String']>;
	removeTagIDs?: InputMaybe<Array<Scalars['ID']>>;
	title?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['Time']>;
};

/** UpdateUserInput is used for update User object. Input was generated by ent. */
export type UpdateUserInput = {
	addCreatedNewsListIDs?: InputMaybe<Array<Scalars['ID']>>;
	clearUpdatedAt?: InputMaybe<Scalars['Boolean']>;
	name?: InputMaybe<Scalars['String']>;
	removeCreatedNewsListIDs?: InputMaybe<Array<Scalars['ID']>>;
	updatedAt?: InputMaybe<Scalars['Time']>;
};

export type User = Node & {
	__typename?: 'User';
	createdAt: Scalars['Time'];
	createdNewsList?: Maybe<Array<News>>;
	email: Scalars['String'];
	id: Scalars['ID'];
	name: Scalars['String'];
	updatedAt?: Maybe<Scalars['Time']>;
};

/** Ordering options for User connections */
export type UserOrder = {
	/** The ordering direction. */
	direction?: OrderDirection;
	/** The field by which to order Users. */
	field: UserOrderField;
};

/** Properties by which User connections can be ordered. */
export enum UserOrderField {
	CreatedAt = 'CREATED_AT',
	Email = 'EMAIL',
	Name = 'NAME',
	UpdatedAt = 'UPDATED_AT',
}

/**
 * UserWhereInput is used for filtering User objects. Input was generated by
 * ent.
 */
export type UserWhereInput = {
	and?: InputMaybe<Array<UserWhereInput>>;
	/** created_at field predicates */
	createdAt?: InputMaybe<Scalars['Time']>;
	createdAtGT?: InputMaybe<Scalars['Time']>;
	createdAtGTE?: InputMaybe<Scalars['Time']>;
	createdAtIn?: InputMaybe<Array<Scalars['Time']>>;
	createdAtLT?: InputMaybe<Scalars['Time']>;
	createdAtLTE?: InputMaybe<Scalars['Time']>;
	createdAtNEQ?: InputMaybe<Scalars['Time']>;
	createdAtNotIn?: InputMaybe<Array<Scalars['Time']>>;
	/** email field predicates */
	email?: InputMaybe<Scalars['String']>;
	emailContains?: InputMaybe<Scalars['String']>;
	emailContainsFold?: InputMaybe<Scalars['String']>;
	emailEqualFold?: InputMaybe<Scalars['String']>;
	emailGT?: InputMaybe<Scalars['String']>;
	emailGTE?: InputMaybe<Scalars['String']>;
	emailHasPrefix?: InputMaybe<Scalars['String']>;
	emailHasSuffix?: InputMaybe<Scalars['String']>;
	emailIn?: InputMaybe<Array<Scalars['String']>>;
	emailLT?: InputMaybe<Scalars['String']>;
	emailLTE?: InputMaybe<Scalars['String']>;
	emailNEQ?: InputMaybe<Scalars['String']>;
	emailNotIn?: InputMaybe<Array<Scalars['String']>>;
	/** created_news_list edge predicates */
	hasCreatedNewsList?: InputMaybe<Scalars['Boolean']>;
	hasCreatedNewsListWith?: InputMaybe<Array<NewsWhereInput>>;
	/** id field predicates */
	id?: InputMaybe<Scalars['ID']>;
	idGT?: InputMaybe<Scalars['ID']>;
	idGTE?: InputMaybe<Scalars['ID']>;
	idIn?: InputMaybe<Array<Scalars['ID']>>;
	idLT?: InputMaybe<Scalars['ID']>;
	idLTE?: InputMaybe<Scalars['ID']>;
	idNEQ?: InputMaybe<Scalars['ID']>;
	idNotIn?: InputMaybe<Array<Scalars['ID']>>;
	/** name field predicates */
	name?: InputMaybe<Scalars['String']>;
	nameContains?: InputMaybe<Scalars['String']>;
	nameContainsFold?: InputMaybe<Scalars['String']>;
	nameEqualFold?: InputMaybe<Scalars['String']>;
	nameGT?: InputMaybe<Scalars['String']>;
	nameGTE?: InputMaybe<Scalars['String']>;
	nameHasPrefix?: InputMaybe<Scalars['String']>;
	nameHasSuffix?: InputMaybe<Scalars['String']>;
	nameIn?: InputMaybe<Array<Scalars['String']>>;
	nameLT?: InputMaybe<Scalars['String']>;
	nameLTE?: InputMaybe<Scalars['String']>;
	nameNEQ?: InputMaybe<Scalars['String']>;
	nameNotIn?: InputMaybe<Array<Scalars['String']>>;
	not?: InputMaybe<UserWhereInput>;
	or?: InputMaybe<Array<UserWhereInput>>;
	/** updated_at field predicates */
	updatedAt?: InputMaybe<Scalars['Time']>;
	updatedAtGT?: InputMaybe<Scalars['Time']>;
	updatedAtGTE?: InputMaybe<Scalars['Time']>;
	updatedAtIn?: InputMaybe<Array<Scalars['Time']>>;
	updatedAtIsNil?: InputMaybe<Scalars['Boolean']>;
	updatedAtLT?: InputMaybe<Scalars['Time']>;
	updatedAtLTE?: InputMaybe<Scalars['Time']>;
	updatedAtNEQ?: InputMaybe<Scalars['Time']>;
	updatedAtNotIn?: InputMaybe<Array<Scalars['Time']>>;
	updatedAtNotNil?: InputMaybe<Scalars['Boolean']>;
};