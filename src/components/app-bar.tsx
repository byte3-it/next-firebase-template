"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "../lib/routes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu, LogOut, User } from "lucide-react";
import { auth } from "@/lib/firebase/firebaseClient";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Dialog, DialogTitle, DialogContent, DialogDescription, DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import { DarkModeToggle } from "./dark-mode-toggle";

export const AppBar = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  async function handleLogout() {
    await signOut(auth);
    router.push(ROUTES.LOGIN);
  }

  return (
    <div className="flex flex-row items-center px-4 p-2 gap-2 border-b border-gray-200 dark:border-gray-800">
      <div className="text-2xl font-bold">Byte3</div>
      <div className="text-2xl">Next Firebase Template</div>

      <div className="flex-1" />

      <DarkModeToggle />

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => router.push(ROUTES.APP_PROFILE)}>
              <User /> Profile
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setOpenLogoutDialog(true)}>
              <LogOut /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Logout Dialog */}
      <Dialog open={openLogoutDialog} onOpenChange={setOpenLogoutDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sei sicuro di voler uscire?</DialogTitle>
            <DialogDescription>
              <Button variant="destructive" onClick={handleLogout}>
                <LogOut /> Esci
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
