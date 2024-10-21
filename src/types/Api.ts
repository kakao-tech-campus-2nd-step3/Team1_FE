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

import {
  Create,
  CreateMember,
  CreateMemberData,
  CreateOptionData,
  CreateProjectData,
  CreateTaskData,
  CreateTestData,
  DeleteMemberData,
  DeleteOptionData,
  DeleteProjectData,
  DeleteTaskData,
  DeleteUserData,
  GenerateInviteLinkData,
  GetList,
  GetMemberData,
  GetMemberList,
  GetMemberListData,
  GetOptionData,
  GetOptionListData,
  GetProjectData,
  GetProjectListData,
  GetProjectMembersData,
  GetProjectPeriodData,
  GetTaskData,
  GetTaskListData,
  GetTestData,
  GetTestListData,
  GetUserData,
  InviteMemberToProjectData,
  InviteRequestDTO,
  MemberCodeCreate1Data,
  MemberCodeCreateData,
  MemberCodeJoinData,
  OptionCreate,
  ProjectCreate,
  ProjectUpdate,
  TaskCreate,
  TaskUpdate,
  UpdateMember,
  UpdateMemberData,
  UpdateOption,
  UpdateOptionData,
  UpdateProjectData,
  UpdateTaskData,
  UpdateUserData,
  UserUpdate,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 유저 구현
   * @name GetUser
   * @summary 유저 정보 조회
   * @request GET:/api/user
   * @secure
   * @response `200` `GetUserData` OK
   */
  getUser = (params: RequestParams = {}) =>
    this.request<GetUserData, any>({
      path: `/api/user`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 구현
   * @name UpdateUser
   * @summary 유저 정보 수정
   * @request PUT:/api/user
   * @secure
   * @response `200` `UpdateUserData` OK
   */
  updateUser = (data: UserUpdate, params: RequestParams = {}) =>
    this.request<UpdateUserData, any>({
      path: `/api/user`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 유저 구현
   * @name DeleteUser
   * @summary 유저 정보 삭제
   * @request DELETE:/api/user
   * @secure
   * @response `200` `DeleteUserData` OK
   */
  deleteUser = (params: RequestParams = {}) =>
    this.request<DeleteUserData, any>({
      path: `/api/user`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 팀원 관리
   * @name GetMember
   * @summary 팀원 개별 조회
   * @request GET:/api/project/{project_id}/member/{member_id}
   * @secure
   * @response `200` `GetMemberData` OK
   */
  getMember = (
    projectId: number,
    memberId: number,
    params: RequestParams = {},
  ) =>
    this.request<GetMemberData, any>({
      path: `/api/project/${projectId}/member/${memberId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 팀원 관리
   * @name UpdateMember
   * @summary 팀원 정보 수정
   * @request PUT:/api/project/{project_id}/member/{member_id}
   * @secure
   * @response `200` `UpdateMemberData` OK
   */
  updateMember = (
    projectId: number,
    memberId: number,
    data: UpdateMember,
    params: RequestParams = {},
  ) =>
    this.request<UpdateMemberData, any>({
      path: `/api/project/${projectId}/member/${memberId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 팀원 관리
   * @name DeleteMember
   * @summary 팀원 삭제
   * @request DELETE:/api/project/{project_id}/member/{member_id}
   * @secure
   * @response `200` `DeleteMemberData` OK
   */
  deleteMember = (
    projectId: number,
    memberId: number,
    params: RequestParams = {},
  ) =>
    this.request<DeleteMemberData, any>({
      path: `/api/project/${projectId}/member/${memberId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 프로젝트
   * @name GetProject
   * @summary 프로젝트 조회
   * @request GET:/api/project/{project-id}
   * @secure
   * @response `200` `GetProjectData` OK
   */
  getProject = (projectId: number, params: RequestParams = {}) =>
    this.request<GetProjectData, any>({
      path: `/api/project/${projectId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 프로젝트
   * @name UpdateProject
   * @summary 프로젝트 설정 수정
   * @request PUT:/api/project/{project-id}
   * @secure
   * @response `200` `UpdateProjectData` OK
   */
  updateProject = (
    projectId: number,
    data: ProjectUpdate,
    params: RequestParams = {},
  ) =>
    this.request<UpdateProjectData, any>({
      path: `/api/project/${projectId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 프로젝트
   * @name DeleteProject
   * @summary 프로젝트 삭제
   * @request DELETE:/api/project/{project-id}
   * @secure
   * @response `200` `DeleteProjectData` OK
   */
  deleteProject = (projectId: number, params: RequestParams = {}) =>
    this.request<DeleteProjectData, any>({
      path: `/api/project/${projectId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 태스크
   * @name GetTask
   * @summary 태스크 단건 조회
   * @request GET:/api/project/task/{taskId}
   * @secure
   * @response `200` `GetTaskData` OK
   */
  getTask = (taskId: number, params: RequestParams = {}) =>
    this.request<GetTaskData, any>({
      path: `/api/project/task/${taskId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 태스크
   * @name UpdateTask
   * @summary 태스크 수정
   * @request PUT:/api/project/task/{taskId}
   * @secure
   * @response `200` `UpdateTaskData` OK
   */
  updateTask = (taskId: number, data: TaskUpdate, params: RequestParams = {}) =>
    this.request<UpdateTaskData, any>({
      path: `/api/project/task/${taskId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 태스크
   * @name DeleteTask
   * @summary 태스크 삭제
   * @request DELETE:/api/project/task/{taskId}
   * @secure
   * @response `200` `DeleteTaskData` OK
   */
  deleteTask = (taskId: number, params: RequestParams = {}) =>
    this.request<DeleteTaskData, any>({
      path: `/api/project/task/${taskId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 프로젝트 옵션
   * @name GetOption
   * @summary 프로젝트 옵션 조회
   * @request GET:/api/project/option/{optionId}
   * @secure
   * @response `200` `GetOptionData` OK
   */
  getOption = (optionId: number, params: RequestParams = {}) =>
    this.request<GetOptionData, any>({
      path: `/api/project/option/${optionId}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 프로젝트 옵션
   * @name UpdateOption
   * @summary 옵션 수정
   * @request PUT:/api/project/option/{optionId}
   * @secure
   * @response `200` `UpdateOptionData` OK
   */
  updateOption = (
    optionId: number,
    data: UpdateOption,
    params: RequestParams = {},
  ) =>
    this.request<UpdateOptionData, any>({
      path: `/api/project/option/${optionId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 프로젝트 옵션
   * @name DeleteOption
   * @summary 옵션 수정
   * @request DELETE:/api/project/option/{optionId}
   * @secure
   * @response `200` `DeleteOptionData` OK
   */
  deleteOption = (optionId: number, params: RequestParams = {}) =>
    this.request<DeleteOptionData, any>({
      path: `/api/project/option/${optionId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 참조
   * @name GetTestList
   * @summary 조회 참조
   * @request GET:/api/test
   * @secure
   * @response `200` `GetTestListData` OK
   */
  getTestList = (
    query: {
      param: GetList;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetTestListData, any>({
      path: `/api/test`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 참조
   * @name CreateTest
   * @summary 생성 참조
   * @request POST:/api/test
   * @secure
   * @response `200` `CreateTestData` OK
   */
  createTest = (data: Create, params: RequestParams = {}) =>
    this.request<CreateTestData, any>({
      path: `/api/test`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description id1번 유저의 토큰 생성(테스트 외 사용금지)
   *
   * @tags 참조
   * @name MemberCodeCreate
   * @summary 테스트용 토큰 생성
   * @request POST:/api/test/userToken/{userId}
   * @secure
   * @response `200` `MemberCodeCreateData` OK
   */
  memberCodeCreate = (userId: number, params: RequestParams = {}) =>
    this.request<MemberCodeCreateData, any>({
      path: `/api/test/userToken/${userId}`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 프로젝트
   * @name GetProjectList
   * @summary 프로젝트 리스트 조회
   * @request GET:/api/project
   * @secure
   * @response `200` `GetProjectListData` OK
   */
  getProjectList = (
    query: {
      param: GetList;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetProjectListData, any>({
      path: `/api/project`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 프로젝트
   * @name CreateProject
   * @summary 프로젝트 생성
   * @request POST:/api/project
   * @secure
   * @response `200` `CreateProjectData` OK
   */
  createProject = (data: ProjectCreate, params: RequestParams = {}) =>
    this.request<CreateProjectData, any>({
      path: `/api/project`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 팀원 관리
   * @name GetMemberList
   * @summary 팀원 전체 조회
   * @request GET:/api/project/{project_id}/member
   * @secure
   * @response `200` `GetMemberListData` OK
   */
  getMemberList = (
    projectId: number,
    query: {
      memberListRequestDTO: GetMemberList;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetMemberListData, any>({
      path: `/api/project/${projectId}/member`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 팀원 관리
   * @name CreateMember
   * @summary 새 팀원 추가
   * @request POST:/api/project/{project_id}/member
   * @secure
   * @response `200` `CreateMemberData` OK
   */
  createMember = (
    projectId: string,
    data: CreateMember,
    params: RequestParams = {},
  ) =>
    this.request<CreateMemberData, any>({
      path: `/api/project/${projectId}/member`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 태스크
   * @name GetTaskList
   * @summary 프로젝트 아이디로 태스크 리스트 조회
   * @request GET:/api/project/{projectId}/task
   * @secure
   * @response `200` `GetTaskListData` OK
   */
  getTaskList = (
    projectId: number,
    query: {
      param: GetList;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetTaskListData, any>({
      path: `/api/project/${projectId}/task`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 태스크
   * @name CreateTask
   * @summary 태스크 생성
   * @request POST:/api/project/{projectId}/task
   * @secure
   * @response `200` `CreateTaskData` OK
   */
  createTask = (
    projectId: number,
    data: TaskCreate,
    params: RequestParams = {},
  ) =>
    this.request<CreateTaskData, any>({
      path: `/api/project/${projectId}/task`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 참여 링크 생성
   * @name GenerateInviteLink
   * @summary 팀원초대 코드 생성
   * @request POST:/api/project/{projectId}/invite-link/{userId}
   * @secure
   * @response `200` `GenerateInviteLinkData` OK
   */
  generateInviteLink = (
    projectId: number,
    userId: number,
    params: RequestParams = {},
  ) =>
    this.request<GenerateInviteLinkData, any>({
      path: `/api/project/${projectId}/invite-link/${userId}`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 프로젝트 옵션
   * @name GetOptionList
   * @summary 프로젝트 옵션 리스트 조회
   * @request GET:/api/project/option
   * @secure
   * @response `200` `GetOptionListData` OK
   */
  getOptionList = (
    query: {
      param: GetList;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetOptionListData, any>({
      path: `/api/project/option`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 프로젝트 옵션
   * @name CreateOption
   * @summary 옵션 생성
   * @request POST:/api/project/option
   * @secure
   * @response `200` `CreateOptionData` OK
   */
  createOption = (data: OptionCreate, params: RequestParams = {}) =>
    this.request<CreateOptionData, any>({
      path: `/api/project/option`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 이메일 전송
   * @name InviteMemberToProject
   * @summary 이메일로 참여코드 전송하기
   * @request POST:/api/project/invite
   * @secure
   * @response `200` `InviteMemberToProjectData` OK
   */
  inviteMemberToProject = (
    data: InviteRequestDTO,
    params: RequestParams = {},
  ) =>
    this.request<InviteMemberToProjectData, any>({
      path: `/api/project/invite`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 참조
   * @name GetTest
   * @summary 조회 참조
   * @request GET:/api/test/{id}
   * @secure
   * @response `200` `GetTestData` OK
   */
  getTest = (id: number, params: RequestParams = {}) =>
    this.request<GetTestData, any>({
      path: `/api/test/${id}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 프로젝트
   * @name GetProjectMembers
   * @summary 프로젝트 멤버 조회
   * @request GET:/api/project/{project-id}/members
   * @secure
   * @response `200` `GetProjectMembersData` OK
   */
  getProjectMembers = (projectId: number, params: RequestParams = {}) =>
    this.request<GetProjectMembersData, any>({
      path: `/api/project/${projectId}/members`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 프로젝트
   * @name GetProjectPeriod
   * @summary 프로젝트 기간 리스트 조회
   * @request GET:/api/project/periods
   * @secure
   * @response `200` `GetProjectPeriodData` OK
   */
  getProjectPeriod = (
    query: {
      param: GetList;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetProjectPeriodData, any>({
      path: `/api/project/periods`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 인증기능 구현
   * @name MemberCodeJoin
   * @summary 인증 코드로 멤버 토큰 반환
   * @request GET:/api/auth/memberCode
   * @secure
   * @response `200` `MemberCodeJoinData` OK
   */
  memberCodeJoin = (
    query: {
      memberCode: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<MemberCodeJoinData, any>({
      path: `/api/auth/memberCode`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 인증기능 구현
   * @name MemberCodeCreate1
   * @summary 인증 코드 생성(테스트용)
   * @request GET:/api/auth/memberCode/create
   * @secure
   * @response `200` `MemberCodeCreate1Data` OK
   */
  memberCodeCreate1 = (
    query: {
      memberCode: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<MemberCodeCreate1Data, any>({
      path: `/api/auth/memberCode/create`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
