import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatPublishedDate = (publishedDate: Date) =>
  format(publishedDate, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

export const formatDateRelativeForNow = (date: Date) =>
  formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
