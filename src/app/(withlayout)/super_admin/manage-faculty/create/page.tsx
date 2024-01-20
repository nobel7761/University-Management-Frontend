"use client";

import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelect from "@/components/Forms/FormSelect";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadcrumb from "@/components/ui/UMBreadcrumb";
import UploadImage from "@/components/ui/UploadImage";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import { Button, Col, Row } from "antd";

const CreateFacultyPage = () => {
  const departmentOptions = [
    {
      label: "HR",
      value: "hr",
    },
    {
      label: "Finance",
      value: "finance",
    },
    {
      label: "Management",
      value: "Management",
    },
  ];

  const adminOnSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const base = "super_admin";
  return (
    <>
      <UMBreadcrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-faculty", link: `/${base}/manage-faculty` },
        ]}
      />
      <h1>Create Faculty</h1>
      <div style={{ marginTop: "20px" }}>
        <Form submitHandler={adminOnSubmit}>
          {/* faculty information */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}
            >
              Faculty information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={6} style={{ margin: "10px 0" }}>
                <FormInput
                  name="faculty.name.firstName"
                  label="First name"
                  size="large"
                />
              </Col>

              <Col span={6} style={{ margin: "10px 0" }}>
                <FormInput
                  name="faculty.name.middleName"
                  label="Middle name"
                  size="large"
                />
              </Col>

              <Col span={6} style={{ margin: "10px 0" }}>
                <FormInput
                  name="faculty.name.lastName"
                  label="Last name"
                  size="large"
                />
              </Col>

              <Col span={6} style={{ margin: "10px 0" }}>
                <FormInput
                  type="password"
                  name="password"
                  label="Password"
                  size="large"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelect
                  size="large"
                  name="faculty.gender"
                  options={genderOptions}
                  label="Gender"
                  placeholder="Select"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelect
                  size="large"
                  name="faculty.academicFaculty"
                  label="Academic Faculty"
                  options={departmentOptions}
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{ marginBottom: "10px" }}
              >
                <FormSelect
                  size="large"
                  name="faculty.academicDepartment"
                  label="Academic Department"
                  options={departmentOptions}
                  placeholder="Select"
                />
              </Col>

              <Col span={8} style={{ margin: "10px 0" }}>
                <UploadImage />
              </Col>
            </Row>
          </div>
          {/* basic information  */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}
            >
              Basic information
            </p>
            <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
              <Col span={8} style={{ margin: "10px 0" }}>
                <FormInput
                  type="email"
                  name="faculty.email"
                  label="Email address"
                  size="large"
                />
              </Col>

              <Col span={8} style={{ margin: "10px 0" }}>
                <FormInput
                  name="faculty.contactNo"
                  label="Contact no."
                  size="large"
                />
              </Col>

              <Col span={8} style={{ margin: "10px 0" }}>
                <FormInput
                  name="faculty.emergencyContactNo"
                  label="Emergency contact no."
                  size="large"
                />
              </Col>

              <Col span={8} style={{ margin: "10px 0" }}>
                <FormDatePicker
                  name="faculty.dateOfBirth"
                  label="Date of birth"
                />
              </Col>

              <Col className="gutter-row" span={8} style={{ margin: "10px 0" }}>
                <FormSelect
                  size="large"
                  name="faculty.bloodGroup"
                  label="Blood group"
                  options={bloodGroupOptions}
                  placeholder="Select"
                />
              </Col>

              <Col span={8} style={{ margin: "10px 0" }}>
                <FormInput
                  name="faculty.designation"
                  label="Designation"
                  size="large"
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="faculty.presentAddress"
                  label="Present address"
                  rows={4}
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="faculty.permanentAddress"
                  label="Permanent address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Create Faculty
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateFacultyPage;
