import { guardContent } from "@/actions/auth";
import { LoginForm } from "@/features/auth";

export default async function LoginPage() {
  await guardContent(false);
  return (
    <div className="flex justify-center w-full">
      <LoginForm />
    </div>
  );
}
