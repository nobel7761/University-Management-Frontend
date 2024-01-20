"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadcrumb from "@/components/ui/UMBreadcrumb";
import UMTable from "@/components/ui/UMTable";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
  const { role } = getUserInfo() as any;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <Button type="primary" danger onClick={() => console.log(data)}>
            X
          </Button>
        );
      },
    },
  ];

  const tableData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("page", page, "pageSize", pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    console.log(order, field);
  };

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

      <ActionBar title="Department List">
        <Link href="/super_admin/department/create">
          <Button type="primary">Create</Button>
        </Link>
      </ActionBar>

      <UMTable
        loading={false}
        columns={columns}
        dataSource={tableData}
        showPagination={true}
        pageSize={5}
        totalPages={10}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
      />
    </div>
  );
};

export default DepartmentPage;
