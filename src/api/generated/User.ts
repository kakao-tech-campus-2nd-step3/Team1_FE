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

import { DeleteUserData, GetUserData, UpdateUserData, UserUpdate } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
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
}
