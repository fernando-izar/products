import api from "../services/api";
import { SignInRequestData } from "../components/AuthProvider";
import { message } from "antd";

type SignInRequestResponse = {
  access: string;
  refresh: string;
};

export async function signInRequest({
  username,
  email,
  password,
}: SignInRequestData): Promise<SignInRequestResponse | undefined> {
  try {
    const { data } = await api.post("/api/token/", {
      username,
      email,
      password,
    });
    console.log("data", data);
    const { access, refresh } = data;
    return { access, refresh };
  } catch (error) {
    return undefined;
  }
}
