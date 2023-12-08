
import { auth } from "../../firebase"

const SignOut = () => {

  const handleSignOut = async () => {
   auth.signOut();

  };

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOut;
