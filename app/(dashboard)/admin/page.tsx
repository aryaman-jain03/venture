export default function AdminPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-zinc-400">Manage users, system health, and analytics.</p>
      </div>
      <div className="glass-card p-12 border-white/10 text-center rounded-2xl flex items-center justify-center h-64 text-zinc-500">
        Admin charts and tables will appear here.
      </div>
    </div>
  );
}
