import React, { useState } from "react";
import Lottie from "react-lottie-player";
import lottie from "../../../assets/json/signin.json";
import Layout from "../../../layouts/ArticleLayout";
import { Button, Form, Input, Switch } from "antd";
import { useNavigate } from "react-router-dom";
import RoutePaths from "../../../routes/types";

const SignUp = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(false);

  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const handleReset = () => {
    // form.resetFields();
    setState({
      name: "",
      password: "",
    });
  };

  const handleFinish = () => {};

  return (
    <Layout title="Signup" bool>
      {/* <ToastContainer /> */}
      <div>
        <div className="py-6 flex">
          <div className="flex flex-grow bg-white rounded-lg shadow-all-rounded overflow-hidden my-auto mx-auto max-w-sm lg:max-w-4xl">
            <div className="hidden lg:flex lg:w-1/2 bg-cover bg-black/80 backdrop-blur-md justify-center">
              <Lottie loop animationData={lottie} play />
            </div>
            <div className="w-full p-8 lg:w-1/2">
              <div className="flex flex-col items-end justify-end">
                <Switch
                  checkedChildren={"As Admin"}
                  unCheckedChildren={"As Client"}
                  className="bg-gray-400"
                  defaultChecked={select}
                  onChange={(e) => setSelect(e)}
                />
                <p className="mt-1">{`Sign in as ${select ? "Admin" : "Client"}`}</p>
              </div>
              <h2 className="text-4xl font-semibold text-primary text-center uppercase my-5">
                Sign Up
              </h2>
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
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input className="p-2.5" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ type: "email", required: true }]}
                >
                  <Input className="p-2.5" />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      min: 5,
                    },
                  ]}
                >
                  <Input.Password className="p-2.5" />
                </Form.Item>
                <Form.Item
                  label="Confirm Password"
                  name="confirm password"
                  rules={[
                    {
                      required: true,
                      min: 5,
                    },
                  ]}
                >
                  <Input.Password className="p-2.5" />
                </Form.Item>
                {select && (
                  <Form.Item
                    label="Admin Key"
                    name="admin key"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input className="p-2.5" />
                  </Form.Item>
                )}
                <Form.Item>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <Button
                      className="bg-main flex-grow"
                      type="primary"
                      htmlType="submit"
                    >
                      Create Account
                    </Button>
                    <Button
                      className="flex-grow"
                      htmlType="button"
                      onClick={handleReset}
                    >
                      Reset Fields
                    </Button>
                  </div>
                </Form.Item>
                <div className="mt-8"></div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/5 md:w-1/4"></span>
                  <div className="text-center text-xs text-gray-500 uppercase">
                    <p>
                      Already have an account?{" "}
                      <span
                        onClick={() => navigate(RoutePaths.signin)}
                        className="text-primary hover:text-primary focus:text-primary hover:underline hover:underline-offset-2 cursor-pointer"
                      >
                        Sign In
                      </span>
                    </p>
                  </div>
                  <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
