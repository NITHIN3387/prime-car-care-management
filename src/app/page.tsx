import { LoginForm } from "@/components/forms/login-form";

export default function Home() {
  return (
    <main className="h-dvh bg-secondary-bg flex flex-col justify-center items-center px-6">
      <div className="space-y-12">
        <header>
          <h1 className="text-[3em] font-bold text-white">Login</h1>
          <p className="text-white/50">Please sign in to continue</p>
        </header>
        <LoginForm />
      </div>
    </main>
  );
}
