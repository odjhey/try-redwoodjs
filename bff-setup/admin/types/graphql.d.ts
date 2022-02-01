export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type CoreOrganization = {
  __typename?: 'CoreOrganization';
  cuid: Scalars['String'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateCoreOrganizationInput = {
  cuid: Scalars['String'];
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCoreOrganization: CoreOrganization;
  deleteCoreOrganization: CoreOrganization;
  updateCoreOrganization: CoreOrganization;
};


export type MutationcreateCoreOrganizationArgs = {
  input: CreateCoreOrganizationInput;
};


export type MutationdeleteCoreOrganizationArgs = {
  id: Scalars['Int'];
};


export type MutationupdateCoreOrganizationArgs = {
  id: Scalars['Int'];
  input: UpdateCoreOrganizationInput;
};

export type Query = {
  __typename?: 'Query';
  coreOrganization?: Maybe<CoreOrganization>;
  coreOrganizations: Array<CoreOrganization>;
  redwood?: Maybe<Redwood>;
};


export type QuerycoreOrganizationArgs = {
  id: Scalars['Int'];
};

export type Redwood = {
  __typename?: 'Redwood';
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type UpdateCoreOrganizationInput = {
  cuid?: InputMaybe<Scalars['String']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DeleteCoreOrganizationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteCoreOrganizationMutation = { __typename?: 'Mutation', deleteCoreOrganization: { __typename?: 'CoreOrganization', id: number } };

export type FindCoreOrganizationByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindCoreOrganizationById = { __typename?: 'Query', coreOrganization?: { __typename?: 'CoreOrganization', id: number, cuid: string, name: string, updatedAt: string, deletedAt?: string | null | undefined } | null | undefined };

export type FindCoreOrganizationsVariables = Exact<{ [key: string]: never; }>;


export type FindCoreOrganizations = { __typename?: 'Query', coreOrganizations: Array<{ __typename?: 'CoreOrganization', id: number, cuid: string, name: string, updatedAt: string, deletedAt?: string | null | undefined }> };

export type EditCoreOrganizationByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditCoreOrganizationById = { __typename?: 'Query', coreOrganization?: { __typename?: 'CoreOrganization', id: number, cuid: string, name: string, updatedAt: string, deletedAt?: string | null | undefined } | null | undefined };

export type UpdateCoreOrganizationMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateCoreOrganizationInput;
}>;


export type UpdateCoreOrganizationMutation = { __typename?: 'Mutation', updateCoreOrganization: { __typename?: 'CoreOrganization', id: number, cuid: string, name: string, updatedAt: string, deletedAt?: string | null | undefined } };

export type CreateCoreOrganizationMutationVariables = Exact<{
  input: CreateCoreOrganizationInput;
}>;


export type CreateCoreOrganizationMutation = { __typename?: 'Mutation', createCoreOrganization: { __typename?: 'CoreOrganization', id: number } };
