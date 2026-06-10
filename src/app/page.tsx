import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-lg w-full space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Virtual Builder</h1>
        <p className="text-lg text-muted-foreground">
          AI-powered websites for small businesses. Launch in minutes.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/sign-up" className={cn(buttonVariants({ variant: 'default' }))}>
            Get Started
          </Link>
          <Link href="/sign-in" className={cn(buttonVariants({ variant: 'outline' }))}>
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
