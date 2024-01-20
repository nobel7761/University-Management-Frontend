"use client";

import { Table } from "antd";
import React from "react";

type UMTableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
  showPagination?: boolean;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
};

const UMTable = ({
  loading = false,
  columns,
  dataSource,
  showPagination = true,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
}: UMTableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      style={{ margin: "10px 0" }}
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
