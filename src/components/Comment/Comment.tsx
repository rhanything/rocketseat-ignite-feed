import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";
import { TComment } from "../../types";
import { formatDateRelativeForNow, formatPublishedDate } from "../../utils";
import { useState } from "react";

type CommentProps = TComment & {
  onDeleteComment: (id: number) => void;
};

export const Comment = ({
  id,
  author,
  comment,
  publishedAt,
  onDeleteComment = () => {},
}: CommentProps) => {
  const [clapsCount, setClapsCount] = useState<number>(0);
  const publishedDateFormatted = formatPublishedDate(publishedAt);

  const publishedDateRelativeToNow = formatDateRelativeForNow(publishedAt);

  const handleDelete = () => {
    onDeleteComment(id);
  };

  const handleClapClick = () => {
    setClapsCount((prevClapsCount) => prevClapsCount + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar src={author.avatarUrl} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateRelativeToNow}
              </time>{" "}
            </div>
            <button onClick={handleDelete} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={handleClapClick}>
            <ThumbsUp /> Aplaudir<span> {clapsCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
