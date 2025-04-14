import React, { useEffect, useState } from "react";
import Layout from "../../../../layouts/AdminLayout";
import Lottie from "react-lottie-player";
import lottie from "../../../../assets/json/add-component-2.json";
import { Button, Divider, Form, Select, message } from "antd";
import { setAdminKey } from "../../../../redux/features/sidebarSlice";
import { useDispatch } from "react-redux";
import ComponentType, {
  ComponentsIndex,
} from "../../../../constants/Components";
import Processor from "../Processor/Processor";
import CPUCooler from "../CPUCooler/CPUCooler";
import Motherboard from "../Motherboard/Motherboard";
import GPU from "../GPU/GPU";
import PSU from "../PSU/PSU";
import RAM from "../RAM/RAM";
import Storage from "../Storage/Storage";
import { addProcessor } from "../../../../api/services/Processor";
import { handleError, handleSuccess } from "../../../../helpers/toasts";
import { addCPUCooler } from "../../../../api/services/CPUCooler";
import { addMotherboard } from "../../../../api/services/Motherboard";
import { addGPU } from "../../../../api/services/GPU";
import { addPSU } from "../../../../api/services/PSU";
import { addRAM } from "../../../../api/services/RAM";
import { addStorage } from "../../../../api/services/Storage";
import { addComponent } from "../../../../api/services/Components";

const AddComponent = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  // console.log(select);

  const onFinish = async (values) => {
    // console.log(values);
    try {
      const res = await addComponent(select, values);
      handleSuccess(messageApi, res?.data || "Component added successfully!");
    } catch (error) {
      // console.error("Error", error);
      handleError(messageApi, error || "API Error");
    } finally {
      form.resetFields();
    }
  };

  useEffect(() => {
    dispatch(setAdminKey(["2"]));
  }, [dispatch]);

  return (
    <Layout title="Add Component">
      {contextHolder}
      {/* <ToastContainer /> */}
      <div className="py-6 flex">
        <div
          className={`flex ${
            select && "flex-col"
          } flex-grow bg-white rounded-lg shadow-all-rounded overflow-hidden my-auto mx-auto max-w-sm lg:max-w-4xl`}
        >
          <div
            className={`hidden lg:flex ${
              select ? "" : "lg:w-1/2"
            }  bg-cover bg-blue-900 backdrop-blur-md justify-center`}
          >
            {/* <Lottie loop animationData={lottie} play /> */}
            <Lottie
              animationData={lottie}
              play
              className={`${select && "h-72"}`}
            />
          </div>
          <div className={`w-full p-8 ${select ? "" : "lg:w-1/2"}`}>
            <h2 className="text-4xl font-semibold text-primary text-center uppercase my-5">
              Add Component
            </h2>

            <Form
              name="control-hooks"
              layout="vertical"
              form={form}
              onFinish={onFinish}
              className={`${select && "grid lg:grid-cols-2 gap-4"}`}
            >
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
              {select === ComponentsIndex.PROCESSOR ? (
                <Processor />
              ) : select === ComponentsIndex.CPU_COOLER ? (
                <CPUCooler />
              ) : select === ComponentsIndex.MOTHERBOARD ? (
                <Motherboard />
              ) : select === ComponentsIndex.GPU ? (
                <GPU />
              ) : select === ComponentsIndex.PSU ? (
                <PSU />
              ) : select === ComponentsIndex.RAM ? (
                <RAM />
              ) : select === ComponentsIndex.STORAGE ? (
                <Storage />
              ) : null}
              <Divider className="lg:col-span-2" />

              {select && (
                <Form.Item className="lg:col-span-2">
                  <div className="flex w-full justify-center mx-auto max-w-md space-x-3">
                    <Button
                      className="bg-main flex-grow"
                      type="primary"
                      htmlType="submit"
                    >
                      Save Component
                    </Button>
                  </div>
                </Form.Item>
              )}
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddComponent;
