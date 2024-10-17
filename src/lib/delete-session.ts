import { cookies } from "next/headers";

const deleteSession = () => {
  const cookiesStore = cookies();

  try {
    if (cookiesStore.has("auth-token")) cookiesStore.delete("auth-token");
  } catch (error) {
    console.log(error);
  }
};

export default deleteSession;
