import { FC, memo } from "react";
import { signout } from "../api/auth";

interface Props {}

const Classroom: FC<Props> = (props) => {
  return (
    <div>
      <p className="text-4xl">classroom page</p>
      <button
        type="button"
        className="px-3 py-2 mx-3 mt-3 font-semibold text-left text-white bg-green-400 rounded-lg outline-none hover:bg-green-100 hover:text-gray-500"
        onClick={() => {
          signout();
        }}
      >
        SignOut..
      </button>
    </div>
  );
};

Classroom.defaultProps = {};

export default memo(Classroom);
