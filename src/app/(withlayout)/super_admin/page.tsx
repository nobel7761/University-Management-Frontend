"use client";

import UMBreadcrumb from "@/components/ui/UMBreadcrumb";
import { getUserInfo } from "@/services/auth.service";

const SuperAdminPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadcrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <h1>this page is for super admin</h1>
    </div>
  );
};

export default SuperAdminPage;
