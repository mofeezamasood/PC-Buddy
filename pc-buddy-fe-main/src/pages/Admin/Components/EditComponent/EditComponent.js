import React, { useEffect, useMemo, useState } from "react";
import Layout from "../../../../layouts/AdminLayout";
import Lottie from "react-lottie-player";
import lottie from "../../../../assets/json/add-component-2.json";
import { Button, Divider, Form, Select } from "antd";
import {
  getAdminKey,
  setAdminKey,
} from "../../../../redux/features/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import SelectComponentType from "../../../../constants/SelectComponentType";
import Processor from "../Processor/Processor";
import ProcessorCooler from "../ProcessorCooler/ProcessorCooler";

const EditComponent = () => {
  const dispatch = useDispatch();
  const key = useSelector(getAdminKey);
  const componentType = useMemo(() => SelectComponentType, []);
  const [select, setSelect] = useState();
  const [comp, setComp] = useState();

  useEffect(() => {
    dispatch(setAdminKey(["3"]));
  }, [dispatch]);

  return (
    <Layout title="Add Component" keyo={key}>
      {/* <ToastContainer /> */}
      <div className="py-6 flex">
        <div
          className={`flex ${
            select && comp && "flex-col"
          } flex-grow bg-white rounded-lg shadow-all-rounded overflow-hidden my-auto mx-auto max-w-sm lg:max-w-4xl`}
        >
          <div
            className={`hidden lg:flex ${
              select && comp ? "" : "lg:w-1/2"
            }  bg-cover bg-blue-900 backdrop-blur-md justify-center`}
          >
            {/* <Lottie loop animationData={lottie} play /> */}
            <Lottie
              animationData={lottie}
              play
              className={`${select && comp && "h-72"}`}
            />
          </div>
          <div className={`w-full p-8 ${select && comp ? "" : "lg:w-1/2"}`}>
            <h2 className="text-4xl font-semibold text-primary text-center uppercase my-5">
              Edit Component
            </h2>

            <Form
              name="control-hooks"
              layout="vertical"
              className={`${select && comp && "grid lg:grid-cols-2 gap-4"}`}
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
                  {componentType?.map((type, i) => (
                    <Select.Option key={i} value={type?.toLowerCase()}>
                      {type}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
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
                  onChange={(e) => setComp(e)}
                  allowClear
                >
                  <Select.Option value="Component 1">Component 1</Select.Option>
                  <Select.Option value="Component 2">Component 2</Select.Option>
                  <Select.Option value="Component 3">Component 3</Select.Option>
                  <Select.Option value="Component 4">Component 4</Select.Option>
                  <Select.Option value="Component 5">Component 5</Select.Option>
                  <Select.Option value="Component 6">Component 6</Select.Option>
                  <Select.Option value="Component 7">Component 7</Select.Option>
                </Select>
              </Form.Item>
              {comp &&
                (select === "processor" ? (
                  <Processor />
                ) : select === "processor cooler" ? (
                  <ProcessorCooler />
                ) : null)}
              <Divider className="lg:col-span-2" />

              {select && comp && (
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
