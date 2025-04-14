import React from "react";
import { Form, Input, InputNumber, Radio, Select } from "antd";
import TooltipToast from "../../../../components/Common/TooltipToast";
import { RAMType } from "../../../../constants/RAM";

const RAM = ({ data }) => {
  return (
    <>
      <TooltipToast tooltip="Enter the name of the RAM">
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

      <TooltipToast tooltip="Select the type of the RAM">
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
            {RAMType?.map((type, i) => (
              <Select.Option key={i} value={type?.toLowerCase()}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select the capacity of the RAM">
        <Form.Item
          label="Capacity"
          name="capacity"
          className="w-full"
          initialValue={data?.capacity}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select a capacity" allowClear>
            {[2, 4, 8, 16, 32, 64, 128]?.map((capacity, i) => (
              <Select.Option key={i} value={capacity}>
                {`${capacity} GB`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the read speed of the RAM (400 to 8000)">
        <Form.Item
          name="readSpeed"
          label="Read Speed"
          initialValue={data?.readSpeed}
          rules={[{ required: true, type: "number", min: 400, max: 8000 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the write speed of the RAM (400 to 8000)">
        <Form.Item
          name="writeSpeed"
          label="Write Speed"
          initialValue={data?.writeSpeed}
          rules={[{ required: true, type: "number", min: 400, max: 8000 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the latency of the RAM (5 to 200)">
        <Form.Item
          name="latency"
          label="Latency"
          initialValue={data?.latency}
          rules={[{ required: true, type: "number", min: 5, max: 200 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select whether the RAM has ECC (Error-Correcting Code)">
        <Form.Item
          name="ecc"
          label="ECC"
          initialValue={data?.ecc}
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select whether the RAM has RGB lighting">
        <Form.Item
          name="rgb"
          label="RGB"
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
          rules={[{ required: true, type: "number", min: 0, max: 100000 }]}
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

export default RAM;
