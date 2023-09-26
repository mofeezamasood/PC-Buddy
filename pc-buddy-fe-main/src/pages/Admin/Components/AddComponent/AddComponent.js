import React, { useEffect, useMemo, useState } from "react";
import Layout from "../../../../layouts/AdminLayout";
import Lottie from "react-lottie-player";
import lottie from "../../../../assets/json/add-component-2.json";
import { Button, Divider, Form, Select } from "antd";
import { setAdminKey } from "../../../../redux/features/sidebarSlice";
import { useDispatch } from "react-redux";
import SelectComponentType from "../../../../constants/SelectComponentType";
import Processor from "../Processor/Processor";
import ProcessorCooler from "../ProcessorCooler/ProcessorCooler";

const AddComponent = () => {
  const dispatch = useDispatch();
  const componentType = useMemo(() => SelectComponentType, []);
  const [select, setSelect] = useState();

  // console.log(select)

  useEffect(() => {
    dispatch(setAdminKey(["2"]));
  }, [dispatch]);

  return (
    <Layout title="Add Component">
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
                  {componentType?.map((type, i) => (
                    <Select.Option key={i} value={type?.toLowerCase()}>
                      {type}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              {select === "processor" ? (
                <Processor />
              ) : select === "processor cooler" ? (
                <ProcessorCooler />
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
