import React from "react";
import { Form, Input, InputNumber, Radio, Select } from "antd";
import TooltipToast from "../../../../components/Common/TooltipToast";
import { StorageType, StorageFormFactor } from "../../../../constants/Storage";

const Storage = ({ data }) => {
  return (
    <>
      <TooltipToast tooltip="Enter the name of the storage">
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

      <TooltipToast tooltip="Select the type of the storage">
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
            {StorageType?.map((type, i) => (
              <Select.Option key={i} value={type?.toLowerCase()}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the capacity of the storage">
        <Form.Item
          name="capacity"
          label="Capacity (GB)"
          initialValue={data?.capacity}
          rules={[{ required: true, type: "number" }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the read speed of the storage">
        <Form.Item
          name="readSpeed"
          label="Read Speed (MB/s)"
          initialValue={data?.readSpeed}
          rules={[{ required: true, type: "number" }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the write speed of the storage">
        <Form.Item
          name="writeSpeed"
          label="Write Speed (MB/s)"
          initialValue={data?.writeSpeed}
          rules={[{ required: true, type: "number" }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select the form factor of the storage">
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
            {StorageFormFactor?.map((factor, i) => (
              <Select.Option key={i} value={factor?.toLowerCase()}>
                {factor}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the Price">
        <Form.Item
          name="price"
          label="Price"
          initialValue={data?.price}
          rules={[{ required: true, type: "number", min: 0, max: 500000 }]}
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

export default Storage;
