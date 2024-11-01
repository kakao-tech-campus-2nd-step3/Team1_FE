import { rest } from "msw";

export const projectMockHandler = [
  rest.get(`https://seamlessup.com/api/project/:projectId`, (req, res, ctx) => {
    const { projectId } = req.params;

    const projectData = {
      id: projectId,
      name: `모킹 프로젝트 ${projectId}`,
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 86400000).toISOString(),
      optionIds: [1, 2, 3],
    };

    return res(
      ctx.status(200),
      ctx.json({
        resultData: projectData,
      })
    );
  }),
];
