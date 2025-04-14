import React from "react";
import { Form, Input, InputNumber, Radio, Select } from "antd";
import TooltipToast from "../../../../components/Common/TooltipToast";
import { ProcessorType } from "../../../../constants/Processor";

const Processor = ({ data }) => {
  return (
    <>
      <TooltipToast tooltip="Enter the name of the processor">
        <Form.Item
          label="Name"
          name="name"
          initialValue={data?.name}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input className="" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the type of the processor">
        <Form.Item
          label="Type"
          name="type"
          className="w-full"
          initialValue={data?.type}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select a type" allowClear>
            {ProcessorType?.map((type, i) => (
              <Select.Option key={i} value={type?.toLowerCase()}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the number of cores (1 to 128)">
        <Form.Item
          name="cores"
          label="Cores"
          initialValue={data?.cores}
          rules={[{ required: true, type: "number", min: 1, max: 128 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the number of threads (1 to 256)">
        <Form.Item
          name="threads"
          label="Threads"
          initialValue={data?.threads}
          rules={[{ required: true, type: "number", min: 1, max: 256 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the base clock (1.0 to 5.0 GHz)">
        <Form.Item
          name="baseClock"
          label="Base Clock"
          initialValue={data?.baseClock}
          rules={[{ required: true, type: "number", min: 1.0, max: 5.0 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the boost clock (2.0 to 7.0 GHz)">
        <Form.Item
          name="boostClock"
          label="Boost Clock"
          initialValue={data?.boostClock}
          rules={[{ required: true, type: "number", min: 2.0, max: 7.0 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the cache size (1 MB to 128 MB)">
        <Form.Item
          name="cache"
          label="Cache"
          initialValue={data?.cache}
          rules={[{ required: true, type: "number", min: 1, max: 128 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the TDP (5 Watt to 500 Watt)">
        <Form.Item
          name="tdp"
          label="TDP"
          initialValue={data?.tdp}
          rules={[{ required: true, type: "number", min: 5, max: 500 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the architecture (1nm to 28nm)">
        <Form.Item
          name="architecture"
          label="Architecture"
          initialValue={data?.architecture}
          rules={[{ required: true, type: "number", min: 1, max: 28 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the socket type">
        <Form.Item
          name="socket"
          label="Socket"
          initialValue={data?.socket}
          rules={[{ required: true }]}
        >
          <Input className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select whether the processor has integrated graphics">
        <Form.Item
          name="integratedGraphics"
          label="Integrated Graphics"
          initialValue={data?.integratedGraphics}
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select whether the processor is overclockable">
        <Form.Item
          name="overClockable"
          label="Overclockable"
          initialValue={data?.overClockable}
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select the Status">
        <Form.Item
          name="status"
          label="Status"
          initialValue={data?.status}
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value={true}>Active</Radio>
            <Radio value={false}>Inactive</Radio>
          </Radio.Group>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the Price">
        <Form.Item
          name="price"
          label="Price"
          initialValue={data?.price}
          rules={[{ required: true, type: "number", min: 0, max: 3000000 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>
    </>
  );
};

export default Processor;
