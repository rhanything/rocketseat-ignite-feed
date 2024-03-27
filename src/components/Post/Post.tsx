import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PostContentType, TComment, TPost } from "../../types";
import { formatDateRelativeForNow, formatPublishedDate } from "../../utils";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";
import { commentsMock } from "../../mocks/Comments.mock";
import { authorsMock } from "../../mocks/Authors.mock";

export const Post = ({ author, publishedAt, content }: TPost) => {
  const [comments, setComments] = useState<TComment[]>(commentsMock);
  const [newComment, setNewComment] = useState<string>("");

  // const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
  //   day: "2-digit",
  //   month: "long",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // }).format(publishedAt);

  const publishedDateFormatted = formatPublishedDate(publishedAt);

  const publishedDateRelativeToNow = formatDateRelativeForNow(publishedAt);

  const handleCommentSubmit = (e: FormEvent) => {
    e.preventDefault();
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        author: authorsMock[0],
        publishedAt: new Date(),
        comment: newComment,
      },
    ]);
    setNewComment("");
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity("");
    setNewComment(e.target.value);
  };

  const deleteComment = (id: number) => {
    const commentsWithoutDeletedOne = comments.reduce(
      (acc: TComment[], current: TComment) => {
        if (current.id === id) {
          return acc;
        }

        return [...acc, current];
      },
      []
    );

    setComments(commentsWithoutDeletedOne);
  };

  const handleInvalidComment = (e: InvalidEvent<HTMLTextAreaElement>) => {
    e.target.setCustomValidity("O comentário não deve estar em branco");
  };

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((cont, idx) => {
          if (cont.type === PostContentType.PARAGRAPH) {
            return <p key={`${cont.content.length}-${idx}`}>{cont.content}</p>;
          }

          return (
            <p key={`${cont.content.length}-${idx}`}>
              <a href={cont.link}>{cont.content}</a>
            </p>
          );
        })}
      </div>

      <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback.</strong>
        <textarea
          onChange={handleCommentChange}
          placeholder="Deixe um comentário"
          value={newComment}
          required
          onInvalid={handleInvalidComment}
        />
        <a href="#">
          {/* coloquei o <a></a> apenas pra burlar o focus quando o botao esta disabled (botoes disabled nao sao focáveis no html) */}
          <footer>
            <button
              id="submit-comment"
              type="submit"
              disabled={isNewCommentEmpty}
            >
              Publicar
            </button>
          </footer>
        </a>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              {...comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};
