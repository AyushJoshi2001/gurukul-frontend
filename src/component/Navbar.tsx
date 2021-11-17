import { FC, memo } from "react";
import { BsPlusLg } from "react-icons/bs";
import ProfileDropdown from "./ProfileDropdown";
import SideNav from "./SideNav";

interface Props {}

const Navbar: FC<Props> = (props) => {
  return (
    <div className="flex justify-between p-5 border-b border-gray-400">
      <div className="flex items-center space-x-5">
        <div className="p-3 rounded-full hover:shadow-lg">
          <SideNav className="flex-shrink-0" />
        </div>
        <p className="text-3xl font-semibold text-blue-500">GURUKUL</p>
      </div>
      <div className="flex items-center space-x-8">
        <div className="p-3 rounded-full hover:shadow-lg">
          <BsPlusLg className="w-6 h-6" />
        </div>
        <ProfileDropdown className="rounded hover:shadow-xl" />
      </div>
    </div>
  );
};

Navbar.defaultProps = {};

export default memo(Navbar);
