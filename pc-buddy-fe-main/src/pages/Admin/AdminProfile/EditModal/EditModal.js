import React, { useState } from "react";
import Modalo from "../../../../components/Common/Modalo";
import { Button, Divider, Form, Input, Switch } from "antd";

const EditModal = ({ modal, setModal }) => {
  const [select, setSelect] = useState({
    one: false,
    two: true,
  });

  const handleFinish = () => {
    console.log("OK");
  };

  return (
    <div>
      <Modalo modal={modal} setModal={setModal} title="Edit Profile">
        <Form layout="vertical" onFinish={handleFinish}>
          <div className="flex gap-4 mb-4">
            <Switch
              checkedChildren="Name"
              unCheckedChildren="Name"
              defaultChecked={select.one}
              onChange={(e) => setSelect((prev) => ({ ...prev, one: e }))}
              className="bg-gray-500"
            />
            <Switch
              checkedChildren="Password"
              unCheckedChildren="Password"
              defaultChecked={select.two}
              onChange={(e) => setSelect((prev) => ({ ...prev, two: e }))}
              className="bg-gray-500"
            />
          </div>
          {select.one && (
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          )}
          {select.two && (
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input.Password />
            </Form.Item>
          )}
          <Divider />
          <div className="flex justify-end">
            <Button type="primary" className="bg-blue-500" htmlType="submit">
              Edit Profile
            </Button>
          </div>
        </Form>
      </Modalo>
    </div>
  );
};

export default EditModal;
