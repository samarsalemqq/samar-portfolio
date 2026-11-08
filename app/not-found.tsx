import Link from "next/link";
import { getDictionary } from "@/lib/preferences";

// Shown for any unknown route, including invalid /projects/[slug] values.
export default function NotFound() {
  const t = getDictionary().notFound;

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium text-accent-light">
        404
      </p>
      <h1 className="mt-3 text-3xl font-medium text-ink">
        {t.title}
      </h1>
      <p className="mt-3 text-muted">
        {t.body}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-dark"
      >
        {t.home}
      </Link>
    </div>
  );
}
