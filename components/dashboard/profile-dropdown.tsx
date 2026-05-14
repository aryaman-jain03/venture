"use client";

import { useState, useTransition, useEffect } from "react";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator 
} from "@/components/ui/dropdown-menu";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogOut, User, Trash2, Loader2, MoreVertical } from "lucide-react";
import { updateProfile, deleteProfile, logout } from "@/app/(auth)/actions";
import { cn } from "@/lib/utils";

interface ProfileDropdownProps {
  user: any;
  variant?: "navbar" | "sidebar" | "mobile";
}

export function ProfileDropdown({ user, variant = "sidebar" }: ProfileDropdownProps) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [firstName, setFirstName] = useState(user?.name?.split(" ")[0] || "");
  const [lastName, setLastName] = useState(user?.name?.split(" ")[1] || "");
  const [phone, setPhone] = useState(user?.phone || "");

  useEffect(() => {
    if (user && isEditOpen) {
      setFirstName(user.name?.split(" ")[0] || "");
      setLastName(user.name?.split(" ")[1] || "");
      setPhone(user.phone || "");
    }
  }, [user, isEditOpen]);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phone", phone);

    startTransition(async () => {
      const result = await updateProfile(formData);
      if (result?.error) {
        setError(result.error);
      } else {
        setIsEditOpen(false);
        window.location.reload();
      }
    });
  };

  const handleDeleteProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    startTransition(async () => {
      const result = await deleteProfile();
      if (result?.error) {
        setError(result.error);
      } else {
        window.location.href = '/';
      }
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger 
          className={cn(
            "outline-none ring-0 w-full text-left",
            variant === "sidebar" && "w-full flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group",
            variant === "mobile" && "flex items-center gap-3 py-2 w-full text-left",
            variant === "navbar" && "flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-2 pr-4 py-1.5 hover:bg-white/10 transition-colors"
          )}
        >
          {variant === "navbar" ? (
            <>
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-[10px]">
                {user?.initials || "??"}
              </div>
              <span className="text-sm font-medium text-white">{user?.name || "User"}</span>
            </>
          ) : variant === "sidebar" ? (
            <>
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                {user?.initials || "??"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white truncate">{user?.name || "Loading..."}</div>
                <div className="text-xs text-zinc-500 truncate">{user?.plan || "..."}</div>
              </div>
              <MoreVertical className="w-4 h-4 text-zinc-500 ml-auto shrink-0 group-hover:text-white transition-colors" />
            </>
          ) : (
            <>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                {user?.initials || "??"}
              </div>
              <span className="text-sm font-medium text-white flex-1 text-left">{user?.name || "User"}</span>
              <MoreVertical className="w-4 h-4 text-zinc-500 ml-auto" />
            </>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align={variant === "navbar" ? "end" : "center"} sideOffset={8} className="w-56 bg-zinc-950 border-white/10 text-zinc-300">
          <button type="button" onClick={() => setIsEditOpen(true)} className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-white/10 hover:text-white">
            <User className="w-4 h-4 mr-2" /> Edit Profile
          </button>
          <DropdownMenuSeparator className="bg-white/10" />
          <button type="button" onClick={() => setIsDeleteOpen(true)} className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors text-red-400 hover:bg-red-500/10 hover:text-red-300">
            <Trash2 className="w-4 h-4 mr-2" /> Delete Profile
          </button>
          <DropdownMenuSeparator className="bg-white/10" />
          <form action={logout} className="w-full">
            <button type="submit" className="w-full flex items-center cursor-pointer hover:bg-white/10 hover:text-white px-2 py-1.5 text-sm outline-none transition-colors rounded-sm text-zinc-300">
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </button>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Edit Profile Dialog */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="sm:max-w-[425px] bg-zinc-950 border border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Update your account details here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUpdateProfile} className="space-y-4 py-4">
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-md">
                {error}
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-zinc-300">First Name</Label>
                <Input 
                  id="firstName" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-zinc-900 border-white/10 text-white" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-zinc-300">Last Name</Label>
                <Input 
                  id="lastName" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-zinc-900 border-white/10 text-white" 
                  required 
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-zinc-300">Phone Number (Optional)</Label>
              <Input 
                id="phone" 
                type="tel"
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                className="bg-zinc-900 border-white/10 text-white" 
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <DialogFooter className="pt-4 border-t border-white/10 mt-4">
              <Button type="button" variant="outline" className="bg-transparent border-white/10 text-white hover:bg-white/10" onClick={() => setIsEditOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-white text-black hover:bg-zinc-200" disabled={isPending}>
                {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Profile Dialog */}
      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent className="sm:max-w-[425px] bg-zinc-950 border border-red-500/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-red-500">Delete Profile</DialogTitle>
            <DialogDescription className="text-zinc-400 pt-2 space-y-2 flex flex-col">
              <span>Are you sure you want to delete your profile?</span>
              <span className="text-red-400 font-medium">Warning: Deleting your account will result in the immediate loss of your active subscription and any payments made. This action cannot be undone.</span>
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleDeleteProfile} className="py-2">
            {error && (
              <div className="p-3 mb-4 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-md">
                {error}
              </div>
            )}
            <DialogFooter className="pt-4 border-t border-white/10 mt-2">
              <Button type="button" variant="outline" className="bg-transparent border-white/10 text-white hover:bg-white/10" onClick={() => {
                setIsDeleteOpen(false);
                setError(null);
              }}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="destructive" 
                className="bg-red-500 hover:bg-red-600 text-white" 
                disabled={isPending}
              >
                {isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Trash2 className="w-4 h-4 mr-2" />}
                Yes, Delete My Account
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
