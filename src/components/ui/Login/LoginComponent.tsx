"use client";

import { Button, Col, Row, message } from "antd";
import loginImage from "@/assets/Tablet login.gif";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  id: string;
  password: string;
};

const LoginComponent = () => {
  const [userLogin] = useUserLoginMutation();
  const { push } = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await userLogin({ ...data }).unwrap(); //here unwrap() will helps you to get only the data. you don't need to go through any nested object

      if (response?.accessToken) {
        push("/profile");
        message.success("User Logged In Successfully");
      }

      storeUserInfo({ accessToken: response?.accessToken });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col sm={12} md={16} lg={12}>
        <Image src={loginImage} alt="login image" width={800} height={800} />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>

            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginComponent;
