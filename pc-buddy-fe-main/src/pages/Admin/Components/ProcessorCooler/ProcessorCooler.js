import { Form, Input, InputNumber, Radio, Select } from "antd";
import TooltipToast from "../../../../components/Common/TooltipToast";

const ProcessorCooler = () => {
  return (
    <>
      <TooltipToast tooltip="Enter the name of the component">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input className="" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the price of the component">
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              type: "number",
              min: 0,
            },
          ]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <Form.Item
        name="cooler type"
        label="Cooler Type"
        rules={[{ required: true }]}
      >
        <Radio.Group>
          <Radio value="aio">AIO</Radio>
          <Radio value="water">Water</Radio>
          <Radio value="air">Air</Radio>
        </Radio.Group>
      </Form.Item>

      <TooltipToast tooltip="Enter the number of fans from 1 to 4">
        <Form.Item
          name="Fan's quantity"
          label="fan's quantity"
          rules={[{ required: true, type: "number", min: 1, max: 4 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the fan Size from 80mm to 260mm">
        <Form.Item
          name="Fan Size"
          label="Fan Size"
          rules={[{ required: true, type: "number", min: 80, max: 260 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the fan rpm from 100 to 6000">
        <Form.Item
          name="Fan RPM"
          label="Fan RPM"
          rules={[{ required: true, type: "number", min: 100, max: 6000 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <Form.Item name="rgb" label="RGB" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </Radio.Group>
      </Form.Item>

      <TooltipToast tooltip="Enter the retail price not 0">
        <Form.Item
          name="retail price"
          label="Retail Price"
          rules={[{ required: true, type: "number", min: 1 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select the Form Factor">
        <Form.Item
          name="form factor"
          label="Form Factor"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select Form Factor">
            <Select.Option value="atx">ATX</Select.Option>
            <Select.Option value="micro-atx">Micro-ATX (mATX)</Select.Option>
            <Select.Option value="mini-itx">Mini-ITX</Select.Option>
            <Select.Option value="eatx">EATX</Select.Option>
            <Select.Option value="sff">SFF (Small Form Factor)</Select.Option>
          </Select>
        </Form.Item>
      </TooltipToast>
    </>
  );
};

export default ProcessorCooler;
