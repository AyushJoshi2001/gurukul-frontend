import { FC, memo } from "react";

interface Props {}

const AddAnnouncement: FC<Props> = (props) => {
  return (
    <button className="px-5 py-2 text-white bg-green-500 rounded-lg hover:text-black hover:bg-green-300">
      Add Announcement
    </button>
  );
};

AddAnnouncement.defaultProps = {};

export default memo(AddAnnouncement);
