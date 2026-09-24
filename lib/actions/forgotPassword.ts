
import z from "zod";
import { AuthApi } from "./auth";

const ForgotPasswordSchema = z.object({
  email: z.email({ error: "Please enter a valid email." }).trim(),
});

export default async function forgotPassword(
  prev: unknown,
  formData: FormData,
) {
  const validateFields = ForgotPasswordSchema.safeParse({
    email: formData.get("email"),
  });
  if (!validateFields.success) {
    return { errors: z.treeifyError(validateFields.error) };
  }
  const { email } = validateFields.data;
  try {
 const authApi = new AuthApi()
    const data = await authApi.forgotPassword(email,);
  return data
  } catch (error) {
    console.log({ "Failed to submit email": error });
   
  }
}
