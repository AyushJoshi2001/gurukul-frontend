import { FC, memo } from "react";

interface Props {}

const Navbar: FC<Props> = (props) => {
  return <div>nav bar</div>;
};

Navbar.defaultProps = {};

export default memo(Navbar);
