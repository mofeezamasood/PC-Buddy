import { Form, Select, message } from "antd";
import { useState } from "react";
import { getComponent } from "../../../../../api/services/Components";
import { handleError } from "../../../../../helpers/toasts";

const ComponentComparison = ({
  data,
  type,
  form1,
  component1,
  component2,
  setComponent1,
  setComponent2,
}) => {
  // const [component1, setComponent1] = useState();
  // const [component2, setComponent2] = useState();
  const [messageApi, contextHolder] = message.useMessage();

  const getComponentData = async (id, status) => {
    if (id) {
      try {
        const response = await getComponent(type, id);
        if (status === 1) {
          setComponent1(response?.data ?? []);
        } else setComponent2(response?.data ?? []);
      } catch (error) {
        handleError(messageApi, error || "API Error");
      }
    }
  };

  return (
    <Form form={form1}>
      <div className="w-full grid grid-cols-2 gap-3">
        {contextHolder}
        <div>
          <p className="text-lg font-bold">Component 1</p>
          <Form.Item
            label="Select Component 1"
            name="select component 1"
            rules={[
              {
                required: true,
              },
            ]}
            className="pb-5"
          >
            <Select
              placeholder="Select component"
              allowClear
              onChange={(id) => {
                getComponentData(id, 1);
                // setComponent2(null);
              }}
              onClear={() => setComponent1(null)}
            >
              {Array.isArray(data) &&
                data
                  ?.filter((val) => !component2 || val._id !== component2._id)
                  ?.map((val) => (
                    <Select.Option key={val._id} value={val._id}>
                      {val?.name}
                    </Select.Option>
                  ))}
            </Select>
          </Form.Item>
          <div className="mx-10">
            {component1 &&
              Object.keys(component1)?.map((val, i) =>
                val === "score" || val === "_id" ? null : (
                  <div key={i} className="flex items-center justify-between">
                    <p>{val}</p>
                    <p>
                      {component1[val] === true
                        ? "true"
                        : component1[val] === false
                        ? "false"
                        : component1[val] === null
                        ? "none"
                        : component1[val]}
                    </p>
                  </div>
                )
              )}
          </div>
        </div>
        <div>
          <p className="text-lg font-bold">Component 2</p>
          <Form.Item
            label="Select Component 2"
            name="select component 2"
            rules={[
              {
                required: true,
              },
            ]}
            className="pb-5"
          >
            <Select
              placeholder="Select component"
              allowClear
              onChange={(id) => {
                getComponentData(id, 2);
                // setComponent1(null);
              }}
              onClear={() => setComponent2(null)}
            >
              {Array.isArray(data) &&
                data
                  ?.filter((val) => !component1 || val._id !== component1._id)
                  ?.map((val) => (
                    <Select.Option key={val._id} value={val._id}>
                      {val?.name}
                    </Select.Option>
                  ))}
            </Select>
          </Form.Item>
          <div className="mx-10">
            {component2 &&
              Object.keys(component2)?.map((val, i) =>
                val === "score" || val === "_id" ? null : (
                  <div key={i} className="flex items-center justify-between">
                    <p>{val}</p>
                    <p>
                      {component2[val] === true
                        ? "true"
                        : component2[val] === false
                        ? "false"
                        : component2[val] === null
                        ? "none"
                        : component2[val]}
                    </p>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
      <div className="flex justify-center font-mono font-bold pt-10 text-lg text-emerald-500">
        {component1 &&
          component2 &&
          (component1?.score === component2?.score ? (
            <p>Both are equally competitive</p>
          ) : component1?.score > component2?.score ? (
            <p>Component 1 is better</p>
          ) : (
            <p>Component 2 is better</p>
          ))}
      </div>
    </Form>
  );
};

export default ComponentComparison;
