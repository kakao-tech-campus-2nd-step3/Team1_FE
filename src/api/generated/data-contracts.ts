/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserUpdate {
  username?: string;
  picture?: string;
}

export interface SingleResultUserSimple {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: UserSimple;
}

export interface UserSimple {
  username?: string;
  email?: string;
  picture?: string;
}

export interface ProjectUpdate {
  /**
   * @minLength 0
   * @maxLength 15
   */
  name: string;
  optionIds: number[];
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  endDateAfterStartDate?: boolean;
  atLeastOneDayDifference?: boolean;
}

export interface ProjectDetail {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  optionIds?: number[];
}

export interface SingleResultProjectDetail {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: ProjectDetail;
}

export interface UpdateMember {
  /**
   * @minLength 0
   * @maxLength 15
   */
  name?: string;
  /**
   * @minLength 0
   * @maxLength 15
   */
  role?: string;
  email?: string;
  imageURL?: string;
}

export interface MemberResponseDTO {
  message?: string;
  name?: string;
  role?: string;
  email?: string;
  getattendURL?: string;
  /** @format int64 */
  id?: number;
}

export interface SingleResultMemberResponseDTO {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: MemberResponseDTO;
}

export interface TaskUpdate {
  name?: string;
  description?: string;
  /** @format int64 */
  ownerId?: number;
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  progress?: number;
  /** @format int32 */
  status?: number;
  priority?: "LOW" | "MEDIUM" | "HIGH";
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
}

export interface SingleResultTaskDetail {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: TaskDetail;
}

export interface TaskDetail {
  /** @format int64 */
  id?: number;
  name?: string;
  description?: string;
  /** @format int64 */
  ownerId?: number;
  /** @format int32 */
  progress?: number;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  priority?: "LOW" | "MEDIUM" | "HIGH";
  /** @format int32 */
  status?: number;
}

export interface OptionUpdate {
  name?: string;
  description?: string;
  optionType?: string;
}

export interface OptionDetail {
  /** @format int64 */
  id?: number;
  name?: string;
  description?: string;
  optionType?: string;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface SingleResultOptionDetail {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: OptionDetail;
}

export interface Create {
  name?: string;
}

export interface SingleResultTestEntity {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: TestEntity;
}

export interface TestEntity {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface SingleResultToken {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: Token;
}

export interface Token {
  token?: string;
}

export interface ProjectCreate {
  /**
   * @minLength 0
   * @maxLength 15
   */
  name: string;
  optionIds: number[];
  /** @format date-time */
  startDate: string;
  /** @format date-time */
  endDate: string;
  endDateAfterStartDate?: boolean;
  atLeastOneDayDifference?: boolean;
}

export interface TaskCreate {
  name: string;
  description?: string;
  /** @format int64 */
  ownerId: number;
  /** @format int32 */
  status: number;
  priority: "LOW" | "MEDIUM" | "HIGH";
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  progress: number;
  /** @format date-time */
  startDate: string;
  /** @format date-time */
  endDate: string;
}

export interface CreateMember {
  email: string;
  attendURL?: string;
  name?: string;
}

export interface SingleResultString {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: string;
}

export interface OptionCreate {
  name: string;
  description?: string;
  optionType: string;
}

export interface InviteRequestDTO {
  /** @format int64 */
  projectId?: number;
  email?: string;
  name?: string;
}

export interface SingleResultUserDetails {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: UserDetails;
}

export interface UserDetails {
  username?: string;
  email?: string;
  picture?: string;
  role?: string;
  /** @format date-time */
  createDate?: string;
}

export interface GetList {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  sort?: string;
}

export interface PageResultTestEntity {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: TestEntity[];
  /** @format int32 */
  size?: number;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pages?: number;
  hasNext?: boolean;
  /** @format int64 */
  total?: number;
}

export interface PageResultProjectDetail {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: ProjectDetail[];
  /** @format int32 */
  size?: number;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pages?: number;
  hasNext?: boolean;
  /** @format int64 */
  total?: number;
}

export interface OwnerDetail {
  /** @format int64 */
  id?: number;
  name?: string;
  role?: string;
  imageURL?: string;
}

export interface PageResultTaskWithOwnerDetail {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: TaskWithOwnerDetail[];
  /** @format int32 */
  size?: number;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pages?: number;
  hasNext?: boolean;
  /** @format int64 */
  total?: number;
}

export interface TaskWithOwnerDetail {
  /** @format int64 */
  id?: number;
  name?: string;
  description?: string;
  owner?: OwnerDetail;
  /** @format int32 */
  progress?: number;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  priority?: "LOW" | "MEDIUM" | "HIGH";
  /** @format int32 */
  status?: number;
}

export interface MemberProgress {
  teamMember?: OwnerDetail;
  /** @format int32 */
  progress?: number;
  activeTasks?: TaskDetail[];
}

export interface PageResultMemberProgress {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: MemberProgress[];
  /** @format int32 */
  size?: number;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pages?: number;
  hasNext?: boolean;
  /** @format int64 */
  total?: number;
}

export interface ProjectProgress {
  /** @format int64 */
  projectId?: number;
  /** @format int32 */
  projectProgress?: number;
  treeGrowthStage?: string;
  description?: string;
}

export interface SingleResultProjectProgress {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: ProjectProgress;
}

export interface ListResultOptionDetail {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: OptionDetail[];
}

export interface GetMemberList {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  sort?: string;
}

export interface PageResultMemberResponseDTO {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: MemberResponseDTO[];
  /** @format int32 */
  size?: number;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pages?: number;
  hasNext?: boolean;
  /** @format int64 */
  total?: number;
}

export interface OptionSimple {
  /** @format int64 */
  id?: number;
  name?: string;
  optionType?: string;
}

export interface PageResultOptionSimple {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: OptionSimple[];
  /** @format int32 */
  size?: number;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pages?: number;
  hasNext?: boolean;
  /** @format int64 */
  total?: number;
}

export interface PageResultProjectDate {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: ProjectDate[];
  /** @format int32 */
  size?: number;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pages?: number;
  hasNext?: boolean;
  /** @format int64 */
  total?: number;
}

export interface ProjectDate {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
}

export interface SingleResultLong {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  /** @format int64 */
  resultData?: number;
}

export type GetUserData = SingleResultUserDetails;

export type UpdateUserData = SingleResultUserSimple;

export type DeleteUserData = SingleResultUserSimple;

export type GetProjectData = SingleResultProjectDetail;

export type UpdateProjectData = SingleResultProjectDetail;

export type DeleteProjectData = SingleResultLong;

export type GetMemberData = SingleResultMemberResponseDTO;

export type UpdateMemberData = SingleResultMemberResponseDTO;

export type DeleteMemberData = SingleResultMemberResponseDTO;

export type UpdateTaskData = SingleResultTaskDetail;

export type DeleteTaskData = SingleResultLong;

export type GetOptionData = SingleResultOptionDetail;

export type UpdateOptionData = SingleResultOptionDetail;

export type DeleteOptionData = SingleResultOptionDetail;

export type GetTestListData = PageResultTestEntity;

export type CreateTestData = SingleResultTestEntity;

export type MemberCodeCreateData = SingleResultToken;

export type GetProjectListData = PageResultProjectDetail;

export type CreateProjectData = SingleResultProjectDetail;

export type GetTaskListData = PageResultTaskWithOwnerDetail;

export type CreateTaskData = SingleResultTaskDetail;

export type GetMemberListData = PageResultMemberResponseDTO;

export type CreateMemberData = SingleResultMemberResponseDTO;

export type GenerateInviteLinkData = SingleResultString;

export type GetOptionListData = PageResultOptionSimple;

export type CreateOptionData = SingleResultOptionDetail;

export type InviteMemberToProjectData = SingleResultString;

export type GetTestData = SingleResultTestEntity;

export type GetMemberProgressData = PageResultMemberProgress;

export type GetProjectProgressData = SingleResultProjectProgress;

export type GetProjectOptionsData = ListResultOptionDetail;

export type GetProjectDateData = PageResultProjectDate;

export type MemberCodeJoinData = SingleResultToken;

export type MemberCodeDecodeData = SingleResultString;

export type MemberCodeCreate1Data = SingleResultString;
