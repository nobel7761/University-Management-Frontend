"use client";

import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import FormSelect from "../Forms/FormSelect";
import {
  academicDepartmentOptions,
  academicFacultyOptions,
  academicSemesterOptions,
  genderOptions,
} from "@/constants/global";
import UploadImage from "../ui/UploadImage";

const StudentInfo = () => {
  return (
    <div>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            marginBottom: "10px",
          }}
        >
          Student Information Form
        </p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.name.firstName"
              size="large"
              label="First Name"
            />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.name.middleName"
              size="large"
              label="Middle Name"
            />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="text"
              name="student.name.lastName"
              size="large"
              label="Last Name"
            />
          </Col>
          <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
            <FormInput
              type="password"
              name="password"
              size="large"
              label="Password"
            />
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormSelect
              size="large"
              name="student.academicDepartment"
              options={academicDepartmentOptions}
              label="Academic Department"
              placeholder="Select"
            />
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormSelect
              size="large"
              name="student.academicFaculty"
              options={academicFacultyOptions}
              label="Academic Faculty"
              placeholder="Select"
            />
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormSelect
              size="large"
              name="student.academicSemester"
              options={academicSemesterOptions}
              label="Academic Semester"
              placeholder="Select"
            />
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <FormSelect
              size="large"
              name="student.gender"
              options={genderOptions}
              label="Gender"
              placeholder="Select"
            />
          </Col>
          <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
            <UploadImage />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudentInfo;
