import React, { useEffect, useState } from "react";
import Layout from "../../../../layouts/AdminLayout";
import Lottie from "react-lottie-player";
import lottie from "../../../../assets/json/add-component-2.json";
import { Button, Divider, Form, Select, message } from "antd";
import {
  getAdminKey,
  setAdminKey,
} from "../../../../redux/features/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import ComponentType, {
  ComponentsIndex,
} from "../../../../constants/Components";
import Processor from "../Processor/Processor";
import { handleError, handleSuccess } from "../../../../helpers/toasts";
import {
  getAllComponents,
  updateComponent,
} from "../../../../api/services/Components";
import CPUCooler from "../CPUCooler/CPUCooler";
import Motherboard from "../Motherboard/Motherboard";
import GPU from "../GPU/GPU";
import PSU from "../PSU/PSU";
import RAM from "../RAM/RAM";
import Storage from "../Storage/Storage";

const EditComponent = () => {
  const dispatch = useDispatch();
  const key = useSelector(getAdminKey);
  const [select, setSelect] = useState();
  const [messageApi, contextHolder] = message.useMessage();
  const [componentsData, setComponentsData] = useState([]);
  const [componentData, setComponentData] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(setAdminKey(["3"]));
  }, [dispatch]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllComponents(select);
        setComponentsData(response?.data ?? []);
      } catch (error) {
        handleError(messageApi, error || "API Error");
      }
    };
    if (select) {
      fetchData();
    }
  }, [select]);

  const onFinish = async (values) => {
    try {
      const res = await updateComponent(select, componentData?._id, values);
      handleSuccess(messageApi, res?.data || "Component updated successfully!");
      setSelect();
      setComponentsData([]);
      setComponentData();
    } catch (error) {
      handleError(messageApi, error || "API Error");
    } finally {
      form.resetFields();
    }
  };

  return (
    <Layout title="Add Component" keyo={key}>
      {contextHolder}
      <div className="py-6 flex">
        <div
          className={`flex ${
            select && componentData && "flex-col"
          } flex-grow bg-white rounded-lg shadow-all-rounded overflow-hidden my-auto mx-auto max-w-sm lg:max-w-4xl`}
        >
          <div
            className={`hidden lg:flex ${
              select && componentData ? "" : "lg:w-1/2"
            }  bg-cover bg-blue-900 backdrop-blur-md justify-center`}
          >
            <Lottie
              animationData={lottie}
              play
              className={`${select && componentData && "h-72"}`}
            />
          </div>
          <div
            className={`w-full p-8 ${
              select && componentData ? "" : "lg:w-1/2"
            }`}
          >
            <h2 className="text-4xl font-semibold text-primary text-center uppercase my-5">
              Edit Component
            </h2>

            <Form
              name="control-hooks"
              layout="vertical"
              form={form}
              onFinish={onFinish}
              className={`${
                select && componentData && "grid lg:grid-cols-2 gap-4"
              }`}
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
                  onChange={(e) => {
                    setSelect(e);
                    setComponentsData([]);
                    setComponentData(null);
                    // setComp();
                  }}
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
                    onChange={(e) => {
                      // setComp(e);
                      setComponentData(
                        componentsData?.find((data) => data.name === e)
                      );
                    }}
                    allowClear
                    value={componentData?.name}
                  >
                    {componentsData?.map((data, i) => (
                      <Select.Option key={i} value={data?.name}>
                        {data?.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              )}
              {componentData &&
                (select === ComponentsIndex.PROCESSOR ? (
                  <Processor data={componentData} />
                ) : select === ComponentsIndex.CPU_COOLER ? (
                  <CPUCooler data={componentData} />
                ) : select === ComponentsIndex.MOTHERBOARD ? (
                  <Motherboard data={componentData} />
                ) : select === ComponentsIndex.GPU ? (
                  <GPU data={componentData} />
                ) : select === ComponentsIndex.PSU ? (
                  <PSU data={componentData} />
                ) : select === ComponentsIndex.RAM ? (
                  <RAM data={componentData} />
                ) : select?.split(" ")[0] === ComponentsIndex.STORAGE ? (
                  <Storage data={componentData} />
                ) : null)}
              <Divider className="lg:col-span-2" />

              {select && componentData && (
                <Form.Item className="lg:col-span-2">
                  <div className="flex w-full justify-center mx-auto max-w-md space-x-3">
                    <Button
                      className="bg-main flex-grow"
                      type="primary"
                      htmlType="submit"
                    >
                      Update Component
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

export default EditComponent;
