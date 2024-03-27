import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";
import classNames from "classnames";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

const placeholderImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzLz74yGhExs4dhlzjm2QLk-SS0sz8OkUEgccZonPaQ&s";

export const Avatar = ({
  src = placeholderImg,
  hasBorder,
  ...rest
}: AvatarProps) => {
  const avatarStyle = classNames(styles.avatar, {
    [styles.avatarWithBorder]: hasBorder,
  });

  return <img className={avatarStyle} src={src} {...rest} />;
};
