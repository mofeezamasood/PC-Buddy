import React from "react";
import { Form, Input, InputNumber, Radio, Select } from "antd";
import TooltipToast from "../../../../components/Common/TooltipToast";
import { PSUEfficiencyRating, PSUModularity } from "../../../../constants/PSU";

const PSU = ({ data }) => {
  return (
    <>
      <TooltipToast tooltip="Enter the name of the PSU">
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

      <TooltipToast tooltip="Enter the power capacity of the PSU (120W to 10000W)">
        <Form.Item
          name="powerCapacity"
          label="Power Capacity"
          initialValue={data?.powerCapacity}
          rules={[{ required: true, type: "number", min: 120, max: 10000 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select the efficiency rating of the PSU">
        <Form.Item
          label="Efficiency Rating"
          name="efficiencyRating"
          className="w-full"
          initialValue={data?.efficiencyRating}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select an efficiency rating" allowClear>
            {PSUEfficiencyRating?.map((rating, i) => (
              <Select.Option key={i} value={rating?.toLowerCase()}>
                {rating}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Enter the number of connectors on the PSU (1 to 20)">
        <Form.Item
          name="connectors"
          label="Connectors"
          initialValue={data?.connectors}
          rules={[{ required: true, type: "number", min: 1, max: 20 }]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </TooltipToast>

      <TooltipToast tooltip="Select the modularity type of the PSU">
        <Form.Item
          label="Modularity"
          name="modularity"
          className="w-full"
          initialValue={data?.modularity}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select a modularity type" allowClear>
            {PSUModularity?.map((type, i) => (
              <Select.Option key={i} value={type?.toLowerCase()}>
                {type}
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
          rules={[{ required: true, type: "number", min: 0, max: 300000 }]}
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

export default PSU;
