import { setupWorker } from "msw";

import { projectMockHandler } from "../api/hooks/projectDetail.mock";
import { inviteCodeMockHandler } from "../api/hooks/projectInviteCode.mock";
import { memberMockHandler } from "../api/hooks/projectMembers.mock";
import { teamProgressMockHandler } from "../api/hooks/teamProgress.mock";
import { userMockHandler } from "../api/hooks/userDetail.mock";

export const worker = setupWorker(
  ...teamProgressMockHandler,
  ...projectMockHandler,
  ...userMockHandler,
  ...memberMockHandler,
  ...inviteCodeMockHandler
);
