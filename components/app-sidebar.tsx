"use client";

import {
  CalendarRange,
  Inbox,
  LayoutDashboard,
  ListOrdered,
  Users,
  Settings,
  Notebook,
  Dice6,
  Store,
  LogOut,
  CreditCard,
  Cable,
  LampFloor,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

// Define the type for menu items
interface MenuItem {
  title: string;
  url: string;
  icon: React.ElementType;
  isActive: boolean;
}

// Menu items.
const items: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: false,
  },
  {
    title: "Menu",
    url: "/dashboard/menu",
    icon: Inbox,
    isActive: false,
  },

  {
    title: "Users",
    url: "/dashboard/users",
    icon: Users,
    isActive: false,
  },
  {
    title: "Roles",
    url: "/dashboard/roles",
    icon: Notebook,
    isActive: false,
  },
];

export function AppSidebar() {
  const router = useRouter();
  const { setOpen } = useSidebar();
  const [activePath, setActivePath] = useState<string>("/dashboard");
  const [activeItem, setActiveItem] = useState<MenuItem>(items[0]);

  useEffect(() => {
    // Set the active path based on the current URL.
    setActivePath(window.location.pathname);
  }, []);

  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      className="overflow-hidden bg-white"
    >
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" className="hover:text-white">
                  <div className="flex items-center -ml-2 hover:text-white">
                    Campaign Tracker
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item: any) => (
                <SidebarMenuItem key={item.title} className="mt-0">
                  <SidebarMenuButton
                    asChild
                    isActive={activeItem.title === item.title}
                    tooltip={item.title}
                    onClick={() => {
                      setActiveItem(item);
                      setOpen(item);
                    }}
                    className={` ${
                      activePath === item.url
                        ? "bg-gradient-to-r from-slate-50 to-secondary text-primary font-semibold hover:text-primary border-r-4 border-primary"
                        : "bg-transparent"
                    }`}
                  >
                    <a href={item.url} className="flex items-center space-x-2">
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              isActive={activePath === "/dashboard/settings"}
              onClick={() => {
                router.push("/dashboard/settings");
              }}
              className={` ${
                activePath === "/dashboard/settings"
                  ? "bg-primary text-white rounded-3xl"
                  : "bg-transparent"
              }`}
            >
              <a href="/dashboard/settings">
                <Settings />
              </a>
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() =>
                signOut({
                  redirect: true,
                  callbackUrl: `/`,
                })
              }
            >
              <p>
                <LogOut />
              </p>
              <span>Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
