import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { redirect } from "next/navigation";
import { demoUser } from '@/lib/demoData';
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userCookie = cookies().get("user");
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  if (!user) {
    redirect("/sign-in");
  }
  
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={ demoUser } />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={ demoUser } />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}