import { rest } from "msw";

export const userMockHandler = [
  rest.get(`https://seamlessup.com/api/user`, (_, res, ctx) => {
    const userData = {
      username: "춘식이",
      email: "choonsik@example.com",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_S63Qs6LHaL87brKmQrj57NPc9Liz7dTBp95k4ZXshd7Y_CRJH8RqDmKFUYkoOPi6OdA&usqp=CAU",
      role: "개발자",
      createDate: "2023-10-01T12:34:56Z",
    };

    return res(
      ctx.status(200),
      ctx.json({
        resultData: userData,
      })
    );
  }),
];
