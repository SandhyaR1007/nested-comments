import { Comment } from "../utils/interface";

export const Comments = ({ comments }: CommentsProps) => {
  return (
    <div>
      {comments.map((ele: Comment) => {
        if (ele.replies.length) return <Comments comments={ele.replies} />;
        return <div>{ele.text}</div>;
      })}
    </div>
  );
};

interface CommentsProps {
  comments: Comment[];
}
