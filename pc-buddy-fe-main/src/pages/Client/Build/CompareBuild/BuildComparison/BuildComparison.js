import { Form, Select } from "antd";
import React from "react";

const BuildComparison = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-3">
      <div>
        <p className="text-lg font-bold">Build 1</p>
        <Form.Item label="Select Processor" name="select-processor-1">
          <Select placeholder="Select Processor">
            <Select.Option>Processor 1</Select.Option>
            <Select.Option>Processor 2</Select.Option>
            <Select.Option>Processor 3</Select.Option>
            <Select.Option>Processor 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Select Processor Cooler"
          name="select-processor-cooler-1"
        >
          <Select placeholder="Select Processor Cooler">
            <Select.Option>Processor Cooler 1</Select.Option>
            <Select.Option>Processor Cooler 2</Select.Option>
            <Select.Option>Processor Cooler 3</Select.Option>
            <Select.Option>Processor Cooler 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select Motherboard" name="select-motherboard-1">
          <Select placeholder="Select Motherboard">
            <Select.Option>Motherboard 1</Select.Option>
            <Select.Option>Motherboard 2</Select.Option>
            <Select.Option>Motherboard 3</Select.Option>
            <Select.Option>Motherboard 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select RAM" name="select-ram-1">
          <Select placeholder="Select RAM">
            <Select.Option>RAM 1</Select.Option>
            <Select.Option>RAM 2</Select.Option>
            <Select.Option>RAM 3</Select.Option>
            <Select.Option>RAM 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Select Storage (SSD/HDD)"
          name="select-storage(SSD/HDD)-1"
        >
          <Select placeholder="Select Storage (SSD/HDD)">
            <Select.Option>Storage (SSD/HDD) 1</Select.Option>
            <Select.Option>Storage (SSD/HDD) 2</Select.Option>
            <Select.Option>Storage (SSD/HDD) 3</Select.Option>
            <Select.Option>Storage (SSD/HDD) 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select PSU" name="select-psu-1">
          <Select placeholder="Select PSU">
            <Select.Option>PSU 1</Select.Option>
            <Select.Option>PSU 2</Select.Option>
            <Select.Option>PSU 3</Select.Option>
            <Select.Option>PSU 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select GPU" name="select-gpu-1">
          <Select placeholder="Select GPU">
            <Select.Option>GPU 1</Select.Option>
            <Select.Option>GPU 2</Select.Option>
            <Select.Option>GPU 3</Select.Option>
            <Select.Option>GPU 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select Casing" name="select-casing-1">
          <Select placeholder="Select Casing">
            <Select.Option>Casing 1</Select.Option>
            <Select.Option>Casing 2</Select.Option>
            <Select.Option>Casing 3</Select.Option>
            <Select.Option>Casing 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select Casing Fans" name="select-casing-fans-1">
          <Select placeholder="Select Casing Fans">
            <Select.Option>Casing Fans 1</Select.Option>
            <Select.Option>Casing Fans 2</Select.Option>
            <Select.Option>Casing Fans 3</Select.Option>
            <Select.Option>Casing Fans 4</Select.Option>
          </Select>
        </Form.Item>
      </div>
      <div>
        <p className="text-lg font-bold">Build 2</p>
        <Form.Item label="Select Processor" name="select-processor-2">
          <Select placeholder="Select Processor">
            <Select.Option value="processor">Processor 1</Select.Option>
            <Select.Option value="processor">Processor 2</Select.Option>
            <Select.Option value="processor">Processor 3</Select.Option>
            <Select.Option value="processor">Processor 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Select Processor Cooler"
          name="select-processor-cooler-2"
        >
          <Select placeholder="Select Processor Cooler">
            <Select.Option value="processor cooler">Processor Cooler 1</Select.Option>
            <Select.Option value="processor cooler">Processor Cooler 2</Select.Option>
            <Select.Option value="processor cooler">Processor Cooler 3</Select.Option>
            <Select.Option value="processor cooler">Processor Cooler 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select Motherboard" name="select-motherboard-2">
          <Select placeholder="Select Motherboard">
            <Select.Option value="motherboard">Motherboard 1</Select.Option>
            <Select.Option value="motherboard">Motherboard 2</Select.Option>
            <Select.Option value="motherboard">Motherboard 3</Select.Option>
            <Select.Option value="motherboard">Motherboard 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select RAM" name="select-ram-2">
          <Select placeholder="Select RAM">
            <Select.Option value="ram">RAM 1</Select.Option>
            <Select.Option value="ram">RAM 2</Select.Option>
            <Select.Option value="ram">RAM 3</Select.Option>
            <Select.Option value="ram">RAM 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Select Storage (SSD/HDD)"
          name="select-storage(SSD/HDD)-2"
        >
          <Select placeholder="Select Storage (SSD/HDD)">
            <Select.Option value="storage">Storage (SSD/HDD) 1</Select.Option>
            <Select.Option value="storage">Storage (SSD/HDD) 2</Select.Option>
            <Select.Option value="storage">Storage (SSD/HDD) 3</Select.Option>
            <Select.Option value="storage">Storage (SSD/HDD) 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select PSU" name="select-psu-2">
          <Select placeholder="Select PSU">
            <Select.Option value="psu">PSU 1</Select.Option>
            <Select.Option value="psu">PSU 2</Select.Option>
            <Select.Option value="psu">PSU 3</Select.Option>
            <Select.Option value="psu">PSU 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select GPU" name="select-gpu-2">
          <Select placeholder="Select GPU">
            <Select.Option value="gpu">GPU 1</Select.Option>
            <Select.Option value="gpu">GPU 2</Select.Option>
            <Select.Option value="gpu">GPU 3</Select.Option>
            <Select.Option value="gpu">GPU 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select Casing" name="select-casing-2">
          <Select placeholder="Select Casing">
            <Select.Option value="casing">Casing 1</Select.Option>
            <Select.Option value="casing">Casing 2</Select.Option>
            <Select.Option value="casing">Casing 3</Select.Option>
            <Select.Option value="casing">Casing 4</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Select Casing Fans" name="select-casing-fans-2">
          <Select placeholder="Select Casing Fans">
            <Select.Option value="casing">Casing Fans 1</Select.Option>
            <Select.Option value="casing">Casing Fans 2</Select.Option>
            <Select.Option value="casing">Casing Fans 3</Select.Option>
            <Select.Option value="casing">Casing Fans 4</Select.Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
};

export default BuildComparison;
