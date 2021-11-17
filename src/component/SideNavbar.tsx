import { FC, memo } from "react";

interface Props {}

const SideNavbar: FC<Props> = (props) => {
  return <div>SideNavbar.</div>;
};

SideNavbar.defaultProps = {};

export default memo(SideNavbar);
