"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadcrumb from "@/components/ui/UMBreadcrumb";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

const CreateDepartmentPage = () => {
  const [addDepartment] = useAddDepartmentMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating....");
    try {
      console.log(data);
      await addDepartment(data);
      message.success("Department Added Successfully");
    } catch (err: any) {
      message.error(err.message);
      console.error(err.message);
    }
  };
  const base = "super_admin";
  return (
    <div>
      <UMBreadcrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />
      <h1>Create Department</h1>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" size="large" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartmentPage;
