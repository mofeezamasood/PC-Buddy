import React, { useEffect, useState } from "react";
import Layout from "../../../../layouts/AdminLayout";
import Lottie from "react-lottie-player";
import lottie from "../../../../assets/json/add-component-2.json";
import { Button, Divider, Form, Select, message } from "antd";
import { setAdminKey } from "../../../../redux/features/sidebarSlice";
import { useDispatch } from "react-redux";
import ComponentType from "../../../../constants/Components";
import { getAllComponents, removeComponent } from "../../../../api/services/Components";
import { handleError, handleSuccess } from "../../../../helpers/toasts";

const DeleteComponent = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState();
  const [components, setComponents] = useState([]);
  const [component, setComponent] = useState();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const onFinish = async () => {
    try {
      const res = await removeComponent(select, component?._id);
      handleSuccess(messageApi, res?.data || "Component removed successfully!");
      setSelect();
      setComponents([]);
      setComponent();
    } catch (error) {
      handleError(messageApi, error || "API Error");
    } finally {
      form.resetFields();
    }
  };

  useEffect(() => {
    dispatch(setAdminKey(["4"]));
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllComponents(select);
        setComponents(response?.data ?? []);
      } catch (error) {
        handleError(messageApi, error || "API Error");
      }
    };
    if (select) {
      fetchData();
    }
  }, [select]);

  return (
    <Layout title="Add Component">
      {contextHolder}
      {/* <ToastContainer /> */}
      <div className="py-6 flex">
        <div className="flex flex-grow bg-white rounded-lg shadow-all-rounded overflow-hidden my-auto mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:flex lg:w-1/2 bg-cover bg-blue-900 backdrop-blur-md justify-center">
            <Lottie animationData={lottie} play />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-4xl font-semibold text-primary text-center uppercase my-5">
              Delete Component
            </h2>

            <Form name="control-hooks" layout="vertical" form={form} onFinish={onFinish}>
              <Form.Item
                label="Component Type"
                name="component type"
                className="w-full"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select a type"
                  onChange={(e) => setSelect(e)}
                  allowClear
                >
                  {ComponentType?.map((type, i) => (
                    <Select.Option key={i} value={type?.toLowerCase()}>
                      {type}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              {select && (
                <Form.Item
                  label="Select Component"
                  name="select component"
                  className="w-full"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Select a component"
                    onChange={(e) =>
                      setComponent(components?.find((data) => data.name === e))
                    }
                    allowClear
                  >
                    {components?.map((data, i) => (
                      <Select.Option key={i} value={data?.name}>
                        {data?.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              )}
              {select && component && (
                <>
                  <Divider className="lg:col-span-2" />

                  <Form.Item className="lg:col-span-2">
                    <div className="flex w-full justify-center mx-auto max-w-md space-x-3">
                      <Button
                        className="bg-main flex-grow"
                        type="primary"
                        htmlType="submit"
                      >
                        Remove Component
                      </Button>
                    </div>
                  </Form.Item>
                </>
              )}
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeleteComponent;
