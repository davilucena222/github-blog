import { formattingDate } from "../../../../utils/formatter";
import { PostContainer } from "./styles";

interface PostProps {
  title: string;
  body: string;
  created_at: string;
  number: number;
}

//Componente Post da página inicial (home)
export function Post({ body, created_at, number, title }: PostProps) {
  return (
    <PostContainer to={`/post/${number}`}>
      <div>
        <strong>{title}</strong>
        <span>{formattingDate(created_at)}</span>
      </div>
      <p>
        {body}
      </p>
    </PostContainer>
  );
}