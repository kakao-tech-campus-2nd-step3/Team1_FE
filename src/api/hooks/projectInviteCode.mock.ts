import { rest } from "msw";

import type { SingleResultString } from "../generated/data-contracts";

const mockInviteCode: SingleResultString = {
  errorCode: 200,
  errorMessage: "Success",
  resultData: "3xUUV44sknuomZMl7KsS3GorpU+99bbw+ghlGv8Y5bY=",
};

export const inviteCodeMockHandler = [
  rest.post(
    "https://seamlessup.com/api/project/:projectId/invite-link",
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockInviteCode));
    }
  ),
];
