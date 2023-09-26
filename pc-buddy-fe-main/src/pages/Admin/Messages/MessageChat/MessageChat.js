import React, { useEffect } from "react";
import Layout from "../../../../layouts/AdminLayout";
import { Button, Divider, Form, Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setAdminKey } from "../../../../redux/features/sidebarSlice";

const MessageChat = () => {
  const dispatch = useDispatch();
  // console.log(key);

  useEffect(() => {
    dispatch(setAdminKey(["5"]));
  }, [dispatch]);

  return (
    <Layout title="Hussain">
      <div className="flex flex-col h-full">
        <div className="flex-grow overflow-y-scroll h-[45vh]">
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
        </div>
        <Divider className="shadow-all" />
        <Form>
          <div className="flex gap-2">
            <Form.Item
              name="message"
              rules={[{ required: true }]}
              className="flex-1"
            >
              <Input placeholder="Enter Message" />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                className="bg-main flex items-center"
                icon={<SendOutlined />}
              >
                Send
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </Layout>
  );
};

const SendMessage = () => {
  return (
    <div className="chat-message my-1">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
              Your error message says permission denied, npm global installs
              must be given root privileges.
            </span>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt="My profile"
          className="w-6 h-6 rounded-full order-2"
        />
      </div>
    </div>
  );
};

const ReceiveMessage = () => {
  return (
    <div className="chat-message my-1">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
              Can be verified on any platform using docker
            </span>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
          alt="My profile"
          className="w-6 h-6 rounded-full order-1"
        />
      </div>
    </div>
  );
};

export default MessageChat;
