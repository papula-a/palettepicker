import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Header from "./Header";

const HeaderWithSession = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();

  return <Header isUserAuthenticated={isUserAuthenticated} user={user} />;
};

export default HeaderWithSession;
