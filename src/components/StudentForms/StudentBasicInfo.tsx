import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import FormDatePicker from "../Forms/FormDatePicker";
import FormSelect from "../Forms/FormSelect";
import { bloodGroupOptions } from "@/constants/global";
import FormTextArea from "../Forms/FormTextArea";

const StudentBasicInfo = () => {
  return (
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
        Basic Information
      </p>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormInput
            type="email"
            name="student.email"
            size="large"
            label="Email"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.contactNo"
            size="large"
            label="Contact Number"
          />
        </Col>
        <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
          <FormInput
            type="text"
            name="student.emergencyContactNo"
            size="large"
            label="Emergency Contact Number"
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormDatePicker
            name="student.dateOfBirth"
            label="Date of birth"
            size="large"
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelect
            size="large"
            name="student.bloodGroup"
            options={bloodGroupOptions}
            label="Blood group"
            placeholder="Select"
          />
        </Col>
        <Col span={12} style={{ margin: "10px 0" }}>
          <FormTextArea
            name="student.presentAddress"
            label="Present address"
            rows={4}
          />
        </Col>

        <Col span={12} style={{ margin: "10px 0" }}>
          <FormTextArea
            name="student.permanentAddress"
            label="Permanent address"
            rows={4}
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentBasicInfo;
