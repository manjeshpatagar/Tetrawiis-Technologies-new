import { Button } from '@/components/ui/button';
export default function NotFound() {
  return (
    <section className="site-container grid min-h-[65vh] place-items-center py-20 text-center">
      <div>
        <p className="eyebrow">404 · Page not found</p>
        <h1 className="mt-4 text-5xl">This page took a wrong turn.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg">
          The address may have changed, or the page may no longer exist.
        </p>
        <Button href="/" className="mt-8">
          Return home
        </Button>
      </div>
    </section>
  );
}
