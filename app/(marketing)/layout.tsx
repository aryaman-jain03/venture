import { Navbar } from "@/components/marketing/navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-white/20">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
