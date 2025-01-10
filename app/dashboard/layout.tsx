"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import AppContext from "@/components/AppContext";
import { useState, ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Topbar from "@/components/Topbar";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AppContextValue {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);

  return (
    <AppContext.Provider
      value={{ user, setUser, token, setToken } as AppContextValue}
    >
      <SidebarProvider>
        <div className="flex">
          <AppSidebar />
        </div>
        <main
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex w-full justify-between bg-white pb-3">
            <SidebarTrigger className="bg-white shadow-md rounded-lg m-4" />
            <Topbar />
          </div>
          {children}
        </main>
      </SidebarProvider>
    </AppContext.Provider>
  );
}
