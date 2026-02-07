import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4">
        <h1 className="text-2xl font-semibold">Hello World</h1>
        <Input type="text" placeholder="Enter something..." />
        <Button>Submit</Button>
      </div>
    </div>
  );
}
