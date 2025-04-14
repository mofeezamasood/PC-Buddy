import React from "react";
import { Form, Input, InputNumber, Radio, Select } from "antd";
import TooltipToast from "../../../../components/Common/TooltipToast";
import {
  MotherboardFormFactor,
  MotherboardRamType,
} from "../../../../constants/Motherboard";

const Motherboard = ({ data }) => {
  return (
    <>
      <TooltipToast tooltip="Enter the name of the motherboard">
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

      <TooltipToast tooltip="Enter the socket type of the motherboard">
        <Form.Item
          name="socket"
          label="Socket"
          initialValue={data?.socket}
          rules={[{ required: true }]}
        >
          <Input className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select the form factor of the motherboard">
        <Form.Item
          label="Form Factor"
          name="formFactor"
          className="w-full"
          initialValue={data?.formFactor}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select a form factor" allowClear>
            {MotherboardFormFactor?.map((factor, i) => (
              <Select.Option key={i} value={factor?.toLowerCase()}>
                {factor}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the chipset of the motherboard">
        <Form.Item
          name="chipset"
          label="Chipset"
          initialValue={data?.chipset}
          rules={[{ required: true }]}
        >
          <Input className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the number of RAM slots (1 to 8)">
        <Form.Item
          name="ramSlots"
          label="RAM Slots"
          initialValue={data?.ramSlots}
          rules={[{ required: true, type: "number", min: 1, max: 8 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select the RAM type supported by the motherboard">
        <Form.Item
          label="RAM Type"
          name="ramType"
          className="w-full"
          initialValue={data?.ramType}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select a RAM type" allowClear>
            {MotherboardRamType?.map((ramType, i) => (
              <Select.Option key={i} value={ramType?.toLowerCase()}>
                {ramType}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the number of storage interfaces (0 to 10)">
        <Form.Item
          name="storageInterfaces"
          label="Storage Interfaces"
          initialValue={data?.storageInterfaces}
          rules={[{ required: true, type: "number", min: 0, max: 10 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the audio chipset of the motherboard">
        <Form.Item
          name="audioChipset"
          label="Audio Chipset"
          initialValue={data?.audioChipset}
          rules={[{ required: true }]}
        >
          <Input className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select whether the motherboard has WiFi">
        <Form.Item
          name="wifi"
          label="WiFi"
          initialValue={data?.wifi}
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select whether the motherboard has Bluetooth">
        <Form.Item
          name="bluetooth"
          label="Bluetooth"
          initialValue={data?.bluetooth}
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

export default Motherboard;
