import React from "react";
import { Form, Input, InputNumber, Radio, Select } from "antd";
import TooltipToast from "../../../../components/Common/TooltipToast";
import { GPUType } from "../../../../constants/GPU";

const GPU = ({ data }) => {
  return (
    <>
      <TooltipToast tooltip="Enter the name of the GPU">
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

      <TooltipToast tooltip="Select the type of the GPU">
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
            {GPUType?.map((type, i) => (
              <Select.Option key={i} value={type?.toLowerCase()}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the bus interface of the GPU">
        <Form.Item
          name="busInterface"
          label="Bus Interface"
          initialValue={data?.busInterface}
          rules={[{ required: true }]}
        >
          <Input className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the core clock speed (500 to 2500 MHz)">
        <Form.Item
          name="coreClock"
          label="Core Clock"
          initialValue={data?.coreClock}
          rules={[{ required: true, type: "number", min: 500, max: 2500 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the memory type of the GPU">
        <Form.Item
          name="memoryType"
          label="Memory Type"
          initialValue={data?.memoryType}
          rules={[{ required: true }]}
        >
          <Input className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the memory capacity of the GPU (128 MB to 100000 MB)">
        <Form.Item
          name="memoryCapacity"
          label="Memory Capacity"
          initialValue={data?.memoryCapacity}
          rules={[{ required: true, type: "number", min: 128, max: 100000 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the DirectX version supported by the GPU (1 to 15)">
        <Form.Item
          name="directX"
          label="DirectX"
          initialValue={data?.directX}
          rules={[{ required: true, type: "number", min: 1, max: 15 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the OpenGL version supported by the GPU (minimum 1)">
        <Form.Item
          name="openGL"
          label="OpenGL"
          initialValue={data?.openGL}
          rules={[{ required: true, type: "number", min: 1 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the TDP (Thermal Design Power) of the GPU (5 Watt to 350 Watt)">
        <Form.Item
          name="tdp"
          label="TDP"
          initialValue={data?.tdp}
          rules={[{ required: true, type: "number", min: 5, max: 350 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the number of ports on the GPU (0 to 5)">
        <Form.Item
          name="numberOfPorts"
          label="Number of Ports"
          initialValue={data?.numberOfPorts}
          rules={[{ required: true, type: "number", min: 0, max: 5 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the Price">
        <Form.Item
          name="price"
          label="Price"
          initialValue={data?.price}
          rules={[{ required: true, type: "number", min: 0, max: 1000000 }]}
        >
          <InputNumber className="w-full" />
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
    </>
  );
};

export default GPU;
