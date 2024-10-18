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
  code?: string;
}

export interface SingleResultMemberResponseDTO {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: MemberResponseDTO;
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

export interface TaskUpdate {
  name?: string;
  remark?: string;
  /** @format int32 */
  progress?: number;
  /** @format int64 */
  memberId?: number;
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
  remark?: string;
  /** @format int64 */
  memberId?: number;
  /** @format int32 */
  progress?: number;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
}

export interface UpdateOption {
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

export interface CreateMember {
  email: string;
  code?: string;
}

export interface TaskCreate {
  name: string;
  remark?: string;
  /** @format int64 */
  memberId?: number;
  /** @format date-time */
  startDate: string;
  /** @format date-time */
  endDate: string;
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

export interface GetMemberList {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  sort?: string;
}

export interface MemberEntity {
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format int64 */
  id?: number;
  email?: string;
  isDelete?: boolean;
  role?: string;
  name?: string;
  imageURL?: string;
  projectEntity?: ProjectEntity;
  taskEntities?: TaskEntity[];
  delete?: boolean;
}

export interface OptionEntity {
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format int64 */
  id?: number;
  name?: string;
  description?: string;
  optionType?: "POSITIVE" | "NEGATIVE";
  isDeleted?: boolean;
  options?: ProjectOption[];
  deleted?: boolean;
}

export interface PageResultMemberEntity {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: MemberEntity[];
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

export interface ProjectEntity {
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format int64 */
  id?: number;
  name?: string;
  isDeleted?: boolean;
  userEntity?: UserEntity;
  memberEntities?: MemberEntity[];
  projectOptions?: ProjectOption[];
  taskEntities?: TaskEntity[];
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  user?: UserEntity;
  taskEntity?: TaskEntity[];
}

export interface ProjectOption {
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
  /** @format int64 */
  id?: number;
  isDeleted?: boolean;
  projectEntity?: ProjectEntity;
  optionEntity?: OptionEntity;
}

export interface TaskEntity {
  /** @format int64 */
  id?: number;
  name?: string;
  remark?: string;
  /** @format int32 */
  progress?: number;
  isDeleted?: boolean;
  owner?: MemberEntity;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  project?: ProjectEntity;
  deleted?: boolean;
}

export interface UserEntity {
  /** @format int64 */
  id?: number;
  name?: string;
  email?: string;
  picture?: string;
  role: "ADMIN" | "USER" | "MEMBER";
  isDelete: boolean;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  updatedAt?: string;
}

export interface PageResultTaskDetail {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: TaskDetail[];
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

export interface ListResultMemberResponseDTO {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: MemberResponseDTO[];
}

export interface PageResultProjectPeriod {
  /** @format int32 */
  errorCode?: number;
  errorMessage?: string;
  resultData?: ProjectPeriod[];
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

export interface ProjectPeriod {
  /** @format int64 */
  id?: number;
  name?: string;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
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

export type GetMemberData = SingleResultMemberResponseDTO;

export type UpdateMemberData = SingleResultMemberResponseDTO;

export type DeleteMemberData = SingleResultMemberResponseDTO;

export type GetProjectData = SingleResultProjectDetail;

export type UpdateProjectData = SingleResultProjectDetail;

export type DeleteProjectData = SingleResultLong;

export type GetTaskData = SingleResultTaskDetail;

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

export type GetMemberListData = PageResultMemberEntity;

export type CreateMemberData = SingleResultMemberResponseDTO;

export type GetTaskListData = PageResultTaskDetail;

export type CreateTaskData = SingleResultTaskDetail;

export type GenerateInviteLinkData = SingleResultString;

export type GetOptionListData = PageResultOptionSimple;

export type CreateOptionData = SingleResultOptionDetail;

export type InviteMemberToProjectData = SingleResultString;

export type GetTestData = SingleResultTestEntity;

export type GetProjectMembersData = ListResultMemberResponseDTO;

export type GetProjectPeriodData = PageResultProjectPeriod;

export type MemberCodeJoinData = SingleResultToken;

export type MemberCodeCreate1Data = SingleResultString;
