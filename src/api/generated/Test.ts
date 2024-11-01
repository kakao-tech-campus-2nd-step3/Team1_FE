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

import { Create, CreateTestData, GetList, GetTestData, GetTestListData, MemberCodeCreateData } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Test<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
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
}
