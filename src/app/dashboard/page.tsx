"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-medium">App Center</h1>
        <button
          onClick={handleLogout}
          className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
        >
          Log out
        </button>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-2 mb-10">
          <h2 className="text-2xl font-semibold">Welcome back</h2>
          <p className="text-zinc-400">Your tools and apps live here.</p>
        </div>

        {/* App Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/saint-tropez"
            className="group border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 rounded-xl p-6 flex flex-col gap-2 transition-colors"
          >
            <div className="text-3xl">🏖️</div>
            <div className="font-medium text-zinc-100">Saint-Tropez</div>
            <p className="text-zinc-500 text-sm">The Casa guide, sorted — beach clubs, restaurants, nights, must-dos.</p>
            <span className="text-xs text-zinc-600 group-hover:text-zinc-400 mt-1">Travel →</span>
          </a>
          <div className="border border-dashed border-zinc-700 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-2">
            <div className="text-3xl">🚀</div>
            <p className="text-zinc-500 text-sm">
              More apps will show up here as we build them.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
