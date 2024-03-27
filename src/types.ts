export type TAuthor = {
  avatarUrl: string;
  name: string;
  role: string;
};

export enum PostContentType {
  PARAGRAPH,
  LINK,
}

export type TPostContent = {
  type: PostContentType;
  content: string;
  link?: string;
};

export type TPost = {
  id: number;
  author: TAuthor;
  publishedAt: Date;
  content: TPostContent[];
};

export type TComment = {
  id: number;
  author: TAuthor;
  publishedAt: Date;
  comment: string;
  clapQty?: number;
};
