import Link from "next/link";

// Shown for any unknown route, including invalid /projects/[slug] values.
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-accent-light">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-white">
        Page not found
      </h1>
      <p className="mt-3 text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
      >
        Back to home
      </Link>
    </div>
  );
}
