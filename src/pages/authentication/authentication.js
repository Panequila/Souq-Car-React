import SignInForm from "../../Components/sign-in/sign-in";
import SignUpForm from "../../Components/sign-up/sign-up";
import "./authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
