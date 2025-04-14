import React, { useState } from "react";
import Lottie from "react-lottie-player";
import lottie from "../../../assets/json/signin.json";
import Layout from "../../../layouts/ArticleLayout";
import { Button, Form, Input, Switch, message } from "antd";
import { useNavigate } from "react-router-dom";
import RoutePaths from "../../../routes/types";
import API from "../../../api/server";
import { handleError, handleSuccess } from "../../../helpers/toasts";
import { handleInputChange } from "../../../helpers/handleInputs";

const SignIn = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [loader, setLoader] = useState(false);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleReset = () => {
    form.resetFields();
    setState({
      email: "",
      password: "",
    });
  };

  const handleFinish = async () => {
    setLoader(true);
    try {
      const { email, password } = state;
      // console.log(email, password);
      const res = await API.post("/auth/signin", {
        email,
        password,
      });
      console.log(res);
      // const { data } = res.data;
      handleSuccess(messageApi, "User has been Signed In!");
      handleReset();
      setTimeout(() => {
        navigate(RoutePaths.home);
      }, 1500);
    } catch (err) {
      // console.error(err);
      handleError(messageApi, err.response?.data?.message || "API Error");
    } finally {
      setLoader(false);
    }
  };

  const handleAdminFinish = async () => {
    setLoader(true);
    try {
      const { email, password } = state;
      // console.log(email, password);
      const res = await API.post("/auth/admin/signin", {
        email,
        password,
      });
      console.log(res);
      // const { data } = res.data;
      handleSuccess(messageApi, "Admin has been Signed In!");
      handleReset();
      setTimeout(() => {
        navigate(RoutePaths.admin);
      }, 1500);
    } catch (err) {
      console.error(err);
      handleError(messageApi, err.response?.data?.message || "API Error");
    } finally {
      setLoader(false);
    }
  };

  return (
    <Layout title="Signin" bool>
      {contextHolder}
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
                <p className="mt-1">{`Sign in as ${
                  select ? "Admin" : "Client"
                }`}</p>
              </div>
              <h2 className="text-4xl font-semibold text-primary text-center uppercase my-5">
                Sign In
              </h2>
              <Form
                // {...layout}
                form={form}
                name="control-hooks"
                layout="vertical"
                onFinish={() => (select ? handleAdminFinish() : handleFinish())}
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
                  <Input
                    className="p-2.5"
                    name="email"
                    onChange={(e) => handleInputChange(e, setState)}
                  />
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
                  <Input.Password
                    className="p-2.5"
                    name="password"
                    onChange={(e) => handleInputChange(e, setState)}
                  />
                </Form.Item>
                <div className="my-4">
                  <div className="flex justify-end">
                    <p
                      className="text-xs text-gray-500 cursor-pointer hover:underline hover:underline-offset-2"
                      onClick={() => navigate(RoutePaths.reset)}
                    >
                      Forget Password?
                    </p>
                  </div>
                </div>
                <Form.Item>
                  <div className="flex w-full space-x-3">
                    <Button
                      className="bg-main flex-grow"
                      type="primary"
                      htmlType="submit"
                      loading={loader}
                    >
                      Login Account
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
                      Need an Account?{" "}
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
      </div>
    </Layout>
  );
};

export default SignIn;
