import { Form, Select } from "antd";

const ComponentComparison = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-3">
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
        >
          <Select placeholder="Select component" allowClear>
            <Select.Option value="component 1">Component 1</Select.Option>
            <Select.Option value="component 2">Component 2</Select.Option>
            <Select.Option value="component 3">Component 3</Select.Option>
            <Select.Option value="component 4">Component 4</Select.Option>
            <Select.Option value="component 5">Component 5</Select.Option>
          </Select>
        </Form.Item>
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
        >
          <Select placeholder="Select component" allowClear>
            <Select.Option value="component 1">Component 1</Select.Option>
            <Select.Option value="component 2">Component 2</Select.Option>
            <Select.Option value="component 3">Component 3</Select.Option>
            <Select.Option value="component 4">Component 4</Select.Option>
            <Select.Option value="component 5">Component 5</Select.Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
};

export default ComponentComparison;
