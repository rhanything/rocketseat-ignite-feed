import { TComment } from "../types";
import { authorsMock } from "./Authors.mock";

export const commentsMock: TComment[] = [
  {
    id: 1,
    author: authorsMock[0],
    publishedAt: new Date("2024-03-17 20:00:00"),
    comment: "Muito bem!!!",
  },
  {
    id: 2,
    author: authorsMock[1],
    publishedAt: new Date("2024-03-26 15:00:00"),
    comment: "Legal, achei muito dahora 👋.",
  },
];
