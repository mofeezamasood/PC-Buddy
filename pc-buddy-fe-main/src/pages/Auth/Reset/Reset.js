import React, { useState } from "react";
import Lottie from "react-lottie-player";
import lottie from "../../../assets/json/reset.json";
import Layout from "../../../layouts/ArticleLayout";
import { Button, Divider, Form, Input, Switch } from "antd";
import { useNavigate } from "react-router-dom";
import RoutePaths from "../../../routes/types";
import LottieAnimation from "../../../components/Common/LottieAnimation";

const Reset = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleReset = () => {
    // form.resetFields();
    setState({
      email: "",
      password: "",
    });
  };

  const handleFinish = () => {};

  return (
    <Layout title="Reset" bool>
      {/* <ToastContainer /> */}
      <div className="py-6 flex">
        <div className="flex flex-grow bg-white rounded-lg shadow-all-rounded overflow-hidden my-auto mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:flex lg:w-1/2 bg-cover bg-black/80 backdrop-blur-md justify-center">
            {/* <Lottie loop animationData={lottie} play /> */}
            <LottieAnimation animation={lottie} />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <Switch
              checkedChildren={"As Admin"}
              unCheckedChildren={"As Client"}
              className="bg-gray-400"
            />
            <h2 className="text-4xl font-semibold text-primary text-center uppercase my-5">
              Reset Password
            </h2>
            <p className="text-gray-500 text-center">
              Fill up the form to reset the password
            </p>
            <Form
              // {...layout}
              // form={form}
              name="control-hooks"
              layout="vertical"
              onFinish={handleFinish}
              // style={{
              //   maxWidth: 600,
              // }}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
              >
                <Input className="p-2.5" />
              </Form.Item>
              <Divider />
              <Form.Item>
                <div className="flex w-full space-x-3">
                  <Button
                    className="bg-main flex-grow"
                    type="primary"
                    htmlType="submit"
                  >
                    Send Email
                  </Button>
                </div>
              </Form.Item>
              <div className="mt-8"></div>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <div className="text-center text-xs text-gray-500 uppercase">
                  <p>
                    Not yet register?{" "}
                    <span
                      onClick={() => navigate(RoutePaths.signup)}
                      className="text-primary hover:text-primary focus:text-primary hover:underline hover:underline-offset-2 cursor-pointer"
                    >
                      Sign Up
                    </span>
                  </p>
                </div>
                <span className="border-b w-1/5 md:w-1/4"></span>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reset;
