import React, { useEffect, useState } from "react";
import Layout from "../../../../layouts/ArticleLayout";
import { Button, Card, Form, InputNumber, Modal, Select, message } from "antd";
import { useDispatch } from "react-redux";
import { setKey } from "../../../../redux/features/sidebarSlice";
import { useNavigate } from "react-router-dom";
import RoutePaths from "../../../../routes/types";
import { handleError } from "../../../../helpers/toasts";
import { getBuild } from "../../../../api/services/Components";

const GetBuild = () => {
  const [state, setState] = useState({
    price: "",
    type: "",
  });

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [builds, setBuilds] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleReset = () => {
    // form.resetFields();
    setState({
      price: "",
      type: "",
    });
  };

  const handleSelect = (value) => {
    switch (value) {
      case "male":
        break;
      case "female":
        break;
      case "other":
        break;
      default:
    }
  };

  const handleFinish = async (values) => {
    // navigate(RoutePaths.getBuild + "/1");
    console.log(values);
    try {
      const res = await getBuild(values.price);
      setBuilds(res.data.data);
      showModal();
      // console.log(res.data);
    } catch (error) {
      handleError(messageApi, error || "API Error");
    }
  };
  console.log(builds);

  const dispatch = useDispatch();
  // const key = useSelector(getKey);
  // console.log(key);

  // const handleClick = () => {}

  useEffect(() => {
    dispatch(setKey(["2"]));
  }, [dispatch]);

  // useEffect(() => {
  // }, [dispatch]);

  return (
    <Layout title="Get Build">
      {contextHolder}
      <Modal
        title="Builds"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {builds?.map((build, i) => (
          <div key={i} className="m-5">
            <div className="border p-5 rounded-lg">
              <p>{build.processor.name}</p>
              <p>{build.cpuCooler.name}</p>
              <p>{build.motherboard.name}</p>
              <p>{build.ram.name}</p>
              <p>{build.psu.name}</p>
              <p>{build.gpu.name}</p>
              <p>{build.storage.name}</p>
            </div>
          </div>
        ))}
      </Modal>
      <Card className="max-w-4xl mx-auto">
        <Form
          name="control-hooks"
          layout="vertical"
          onFinish={handleFinish}
          form={form}
        >
          <div className="flex flex-col items-center">
            <h1 className="bg-gray-200 px-6 py-3 rounded text-xl tracking-wide uppercase font-bold">
              Hey, Ready to turn Computer Dreams into Reality?
            </h1>
            <p className="my-8 text-gray-600 text-lg">
              Tell us, are you feeling like a top-of-the-line, turbo-charged
              machine, or a more budget-friendly option still packs a punch?
              Either way, we've got you covered, and we'll work together to
              build your dream PC at a price point that makes you smile. Let's
              get started!
            </p>
            <Form.Item
              label="Price"
              name="price"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber className="w-96" min="1" type="number" />
            </Form.Item>
            <p className="my-8 text-gray-600 text-lg">
              To make sure we get it just right, We'd love to learn a little bit
              more about preferences. Please take a look at the following
              preferences and let me know which ones resonate with you:
            </p>
            <Form.Item
              label="Type"
              name="type"
              className="w-96"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a type"
                onChange={handleSelect}
                allowClear
              >
                <Select.Option value="general-purpose">
                  General Purpose
                </Select.Option>
                <Select.Option value="workstation">Workstation</Select.Option>
                <Select.Option value="gaming-pc">Gaming PC</Select.Option>
                <Select.Option value="for-software-developers">
                  For Software Developers
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <div className="space-x-3 mt-10">
                <Button
                  className="bg-main w-32"
                  type="primary"
                  htmlType="submit"
                >
                  Get Build
                </Button>
                <Button
                  className="w-32"
                  htmlType="button"
                  onClick={handleReset}
                >
                  Reset Fields
                </Button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </Card>
    </Layout>
  );
};

export default GetBuild;