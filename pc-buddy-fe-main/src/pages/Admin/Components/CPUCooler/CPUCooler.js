import React from "react";
import { Form, Input, InputNumber, Radio, Select } from "antd";
import TooltipToast from "../../../../components/Common/TooltipToast";
import { CpuCoolerType } from "../../../../constants/CPUCooler";

const CPUCooler = ({ data }) => {
  return (
    <>
      <TooltipToast tooltip="Enter the name of the component">
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

      <TooltipToast tooltip="Enter the type of the CPU Cooler">
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
            {CpuCoolerType?.map((type, i) => (
              <Select.Option key={i} value={type?.toLowerCase()}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the number of fans (0 to 5)">
        <Form.Item
          name="numberOfFans"
          label="Number of Fans"
          initialValue={data?.numberOfFans}
          rules={[{ required: true, type: "number", min: 0, max: 5 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the minimum fan speed (0 to 1000 RPM)">
        <Form.Item
          name="minFanSpeed"
          label="Min Fan Speed"
          initialValue={data?.minFanSpeed}
          rules={[{ required: true, type: "number", min: 0, max: 1000 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the maximum fan speed (1001 to 4000 RPM)">
        <Form.Item
          name="maxFanSpeed"
          label="Max Fan Speed"
          initialValue={data?.maxFanSpeed}
          rules={[{ required: true, type: "number", min: 1001, max: 4000 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the size of the CPU Cooler (30 to 200 mm)">
        <Form.Item
          name="size"
          label="Size"
          initialValue={data?.size}
          rules={[{ required: true, type: "number", min: 30, max: 200 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select whether the CPU Cooler has RGB lighting">
        <Form.Item
          name="rgb"
          label="RGB Lighting"
          initialValue={data?.rgb}
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the Price">
        <Form.Item
          name="price"
          label="Price"
          initialValue={data?.price}
          rules={[{ required: true, type: "number", min: 0, max: 200000 }]}
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

export default CPUCooler;
