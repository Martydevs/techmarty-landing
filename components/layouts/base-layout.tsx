"use client";

import Footer from "../ui/footer";
import Navbar from "../ui/navbar";

import ToolTip from "../ui/tooltip";
import FollowCursor from "../ui/follow-cursor";
import { Dock, DockIcon } from "../ui/shadcn/dock";
import { FacebookIcon, WhatsappIcon } from "../icons/lib";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <FollowCursor />
      <main className="w-full min-h-screen container">{children}</main>
      <Dock
        distance={100}
        magnification={60}
        className="bottom-3 fixed left-[50%] -translate-x-1/2 backdrop-filter bg-zinc-900 backdrop-blur-md bg-opacity-35 dark:bg-zinc-900 px-10"
      >
        <DockIcon className="bg-white/20 dark:bg-white/10 p-3">
          <ToolTip text="Visitar página de Facebook">
            <FacebookIcon className="size-full" />
          </ToolTip>
        </DockIcon>
        <DockIcon className="bg-white/20 dark:bg-white/10 p-3">
          <ToolTip text="Enviar mensaje por Whatsapp">
            <WhatsappIcon className="size-full" />
          </ToolTip>
        </DockIcon>
      </Dock>
      <Footer />
    </>
  );
}
