import { rest } from "msw";

import type { GetMemberListData } from "../generated/data-contracts";

const mockProjectMembers: GetMemberListData = {
  errorCode: 0,
  errorMessage: "Success",
  resultData: [
    {
      message: "성공적으로 조회되었습니다.",
      name: "가나다",
      role: "팀원",
      email: "ex1@gmail.com",
      getattendURL: "",
      id: 1,
    },
    {
      message: "성공적으로 조회되었습니다.",
      name: "라마바",
      role: "팀원",
      email: "ex2@gmail.com",
      getattendURL: "",
      id: 2,
    },
    {
      message: "성공적으로 조회되었습니다.",
      name: "사아자",
      role: "팀원",
      email: "ex3@gmail.com",
      getattendURL: "",
      id: 3,
    },
    {
      message: "성공적으로 조회되었습니다.",
      name: "차카타",
      role: "팀원",
      email: "ex4@gmail.com",
      getattendURL: "",
      id: 4,
    },
    {
      message: "성공적으로 조회되었습니다.",
      name: "가나다라마바사아자차카타파하",
      role: "팀원",
      email: "ex5@gmail.com",
      getattendURL: "",
      id: 5,
    },
  ],
  size: 10,
  page: 0,
  pages: 1,
  hasNext: false,
  total: 2,
};

export const memberMockHandler = [
  rest.get(
    "https://seamlessup.com/api/project/:projectId/member",
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockProjectMembers));
    }
  ),
  rest.delete(
    "https://seamlessup.com/api/project/:projectId/member/:memberId",
    (req, res, ctx) => {
      const { projectId, memberId } = req.params;
      const deleteMemberId = parseInt(memberId as string, 10);

      if (mockProjectMembers.resultData) {
        const updatedMembers = mockProjectMembers.resultData.filter(
          (member) => member.id !== deleteMemberId
        );

        return res(
          ctx.status(200),
          ctx.json({
            message: `프로젝트 ${projectId}번의 ${deleteMemberId}번 멤버 삭제 성공`,
            updatedMembers,
          })
        );
      }

      return res(
        ctx.status(404),
        ctx.json({ message: "멤버 리스트를 찾을 수 없습니다." })
      );
    }
  ),
];
