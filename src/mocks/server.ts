import { setupServer } from "msw/node";

import { projectMockHandler } from "../api/hooks/projectDetail.mock";
import { inviteCodeMockHandler } from "../api/hooks/projectInviteCode.mock";
import { memberMockHandler } from "../api/hooks/projectMembers.mock";
import { teamProgressMockHandler } from "../api/hooks/teamProgress.mock";
import { userMockHandler } from "../api/hooks/userDetail.mock";

export const server = setupServer(
  ...teamProgressMockHandler,
  ...projectMockHandler,
  ...userMockHandler,
  ...memberMockHandler,
  ...inviteCodeMockHandler
);
