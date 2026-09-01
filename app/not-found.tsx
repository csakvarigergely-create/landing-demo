import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-wrap grid min-h-[70vh] place-items-center py-20 text-center">
      <div className="max-w-xl">
        <p className="eyebrow">404</p>
        <h1 className="heading-lg text-ink">Az oldal nem található.</h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          A megadott cím nem létezik, vagy az oldal már nem érhető el.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Vissza a főoldalra
        </Link>
      </div>
    </main>
  );
}
