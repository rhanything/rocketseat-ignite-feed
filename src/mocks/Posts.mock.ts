import { PostContentType, TPost } from "../types";
import { authorsMock } from "./Authors.mock";

export const postsMock: TPost[] = [
  {
    id: 1,
    author: authorsMock[0],
    publishedAt: new Date("2024-03-17 20:00:00"),
    content: [
      { type: PostContentType.PARAGRAPH, content: "Fala galeraa 👋" },

      {
        type: PostContentType.PARAGRAPH,
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      {
        type: PostContentType.LINK,
        link: "#",
        content: "👉  jane.design/doctorcare",
      },
      { type: PostContentType.LINK, link: "#", content: "#novoprojeto" },
      { type: PostContentType.PARAGRAPH, content: "  " },
      { type: PostContentType.LINK, link: "#", content: "#nlw" },
      { type: PostContentType.PARAGRAPH, content: "  " },
      { type: PostContentType.LINK, link: "#", content: "#rocketseat" },
    ],
  },
  {
    id: 2,
    author: authorsMock[1],
    publishedAt: new Date("2024-03-26 15:00:00"),
    content: [
      { type: PostContentType.PARAGRAPH, content: "Fala galeraa 👋" },

      {
        type: PostContentType.PARAGRAPH,
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      {
        type: PostContentType.LINK,
        link: "#",
        content: "👉   jane.design/doctorcare",
      },
      { type: PostContentType.LINK, link: "#", content: "#novoprojeto" },
      { type: PostContentType.PARAGRAPH, content: "  " },
      { type: PostContentType.LINK, link: "#", content: "#nlw" },
      { type: PostContentType.PARAGRAPH, content: "  " },
      { type: PostContentType.LINK, link: "#", content: "#rocketseat" },
    ],
  },
];
