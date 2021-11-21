import { FC, memo } from "react";
import { IoMdSend } from "react-icons/io";

interface Props {
  className?: string;
}

const ClassCommentTextarea: FC<Props> = ({ className }) => {
  return (
    <div id="CommentDiv" className={"flex w-full " + className}>
      <textarea
        className="flex-1 px-5 py-2"
        placeholder="Add your comment here"
      />
      <div className="flex items-center px-5">
        <IoMdSend className="w-7 h-7" />
      </div>
    </div>
  );
};

ClassCommentTextarea.defaultProps = {};

export default memo(ClassCommentTextarea);
