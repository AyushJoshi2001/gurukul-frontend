import { FC, memo } from "react";
import "../css/loginPage.css";

interface Props {}

const Login: FC<Props> = (props) => {
  return <div className="text-red-600">login page</div>;
};

Login.defaultProps = {};

export default memo(Login);
