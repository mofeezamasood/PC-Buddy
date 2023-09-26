import { DatePicker, Form, Input, InputNumber, Radio } from "antd";
import TooltipToast from "../../../../components/Common/TooltipToast";

const Processor = () => {
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
      <TooltipToast tooltip="Enter the Cores from 1 to 64">
        <Form.Item
          name="cores"
          label="Cores"
          rules={[{ required: true, type: "number", min: 1, max: 64 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the Threads from 1 to 128">
        <Form.Item
          name="threads"
          label="Threads"
          rules={[{ required: true, type: "number", min: 1, max: 128 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the Base Clock from 1.0 to 5.0 GHz">
        <Form.Item
          name="base clock"
          label="Base Clock"
          rules={[{ required: true, type: "number", min: 1.0, max: 5.0 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the igpu name">
        <Form.Item name="igpu" label="IGPU">
          <Input className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the TDP 10 Watt to 500 Watt">
        <Form.Item
          name="tdp"
          label="TDP"
          rules={[{ required: true, type: "number", min: 10, max: 500 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the I3_cache 1 MB to 64 MB">
        <Form.Item
          name="i3 cache"
          label="I3 Cache"
          rules={[{ required: true, type: "number", min: 1, max: 64 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the processor size 5nm to 28nm">
        <Form.Item
          name="processor size"
          label="Processor Size"
          rules={[{ required: true, type: "number", min: 5, max: 28 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the processor size 5nm to 28nm">
        <Form.Item
          name="processor size"
          label="Processor Size"
          rules={[{ required: true, type: "number", min: 5, max: 28 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select the overclockable">
        <Form.Item
          name="overclockable"
          label="Overclockable"
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value="true">True</Radio>
            <Radio value="false">False</Radio>
          </Radio.Group>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the release date">
        <Form.Item
          name="release date"
          label="Release Date"
          rules={[{ required: true }]}
        >
          <DatePicker className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the retail price not 0">
        <Form.Item
          name="retail price"
          label="Retail Price"
          rules={[{ required: true, type: "number", min: 1 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the socket">
        <Form.Item name="socket" label="Socket" rules={[{ required: true }]}>
          <Input className="w-full" />
        </Form.Item>
      </TooltipToast>
    </>
  );
};

export default Processor
