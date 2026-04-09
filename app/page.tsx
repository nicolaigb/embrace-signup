import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { SignupForm } from "./signup-form";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 mt-40 px-4 items-center bg-background font-sans">
      <SignupForm />
    </main>
  );
}
