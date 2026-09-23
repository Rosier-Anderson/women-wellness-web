
import z, {validate} from "zod";
const LoginFormSchema = z.object({
  email: z.email({error: "Pleasse enter a valid email"}).trim(),
  password: z
    .string()
    .min(8, {error: "Password must be at least 8 characters long."})
    .trim(),
});

export default async function login(prevState: unknown, formData: FormData) {
  const validateFormFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validateFormFields.success) {
    return {errors: z.treeifyError(validateFormFields.error)};
  }

  const {email, password} = validateFormFields.data;
  try {
  const res= await fetch("http://localhost:4000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  console.log(data);
} catch (error) {
  console.error("Login error:", error);
}


  return;
}
