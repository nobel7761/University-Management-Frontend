"use client";

//this layout will be the dashboard layout
//as login page does not require any layout so if we wrap the dashboard layout into the providers.tsx then the whole application will get layout.
//to prevent this, as student, faculty and all other user will see this dashboard layout we are creating a group layout (naming the folder with first bracket - (withlayout))

//this layout will take all the routes under this folder(withlayout) and will pass through this layout

//for better understand see this video - https://web.programming-hero.com/level2-batch-1/video/level2-batch-1-49-2_-configure-ant-design-and-basic-routing

import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const userLoggedIn = isLoggedIn();
  const { push } = useRouter();

  useEffect(() => {
    if (!userLoggedIn) {
      push("/login");
    }
    setIsLoading(true);
  }, [userLoggedIn, push]);

  if (!isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
