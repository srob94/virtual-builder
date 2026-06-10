import { auth } from '@clerk/nextjs/server';
import { Button } from '@/components/ui/button';

export default async function AppPage() {
  const { userId } = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-lg w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold">Virtual Builder</h1>
        <p className="text-muted-foreground">
          Welcome, {userId}. Your workspace is ready.
        </p>
        <Button>Get Started</Button>
      </div>
    </main>
  );
}
