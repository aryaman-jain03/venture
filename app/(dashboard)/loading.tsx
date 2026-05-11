import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function DashboardLoading() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="space-y-3 w-full max-w-md">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-4 w-full" />
        </div>
        <Card className="p-6 w-full md:w-80 border-white/10 shrink-0 bg-transparent">
          <div className="flex justify-between items-end mb-4">
             <Skeleton className="h-4 w-24" />
             <Skeleton className="h-8 w-16" />
          </div>
          <Skeleton className="h-2 w-full" />
        </Card>
      </div>

      <div>
        <Skeleton className="h-6 w-48 mb-6" />
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="p-6 border-white/10 h-64 flex flex-col bg-transparent">
              <div className="flex justify-between items-start mb-6">
                <Skeleton className="w-12 h-12 rounded-xl" />
                <Skeleton className="w-20 h-6 rounded-md" />
              </div>
              <Skeleton className="h-6 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6 mb-auto" />
              <Skeleton className="h-10 w-full mt-4" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
