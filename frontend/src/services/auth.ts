import api from "../services/api";
import { SignInRequestData } from "../components/AuthProvider";

type SignInRequestResponse = {
  access: string;
  refresh: string;
};

export async function signInRequest({
  username,
  password,
}: SignInRequestData): Promise<SignInRequestResponse | undefined> {
  try {
    const { data } = await api.post("/api/token/", {
      username,
      password,
    });
    const { access, refresh } = data;
    return { access, refresh };
  } catch (error) {
    return undefined;
  }
}
