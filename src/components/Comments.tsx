import { Comment } from "../utils/interface";

export const Comments = ({ comments }: CommentsProps) => {
  return (
    <div>
      {comments.map((ele: Comment) => {
        return <div>{ele.text}</div>;
      })}
    </div>
  );
};

interface CommentsProps {
  comments: Comment[];
}
