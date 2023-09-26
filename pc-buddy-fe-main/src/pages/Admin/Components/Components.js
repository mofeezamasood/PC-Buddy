import React, { useEffect } from "react";
import Layout from "../../../layouts/AdminLayout";
import { useDispatch } from "react-redux";
import { setAdminKey } from "../../../redux/features/sidebarSlice";
import { Button } from "antd";
import { AppstoreAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import RoutePaths from "../../../routes/types";

const Components = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(key);

  useEffect(() => {
    dispatch(setAdminKey(["2"]));
  }, [dispatch]);

  return (
    <Layout title="Components">
      <div className="flex justify-end">
        <Button
          type="ghost"
          icon={<AppstoreAddOutlined />}
          className="bg-emerald-500 text-white flex items-center"
          onClick={() => navigate(RoutePaths.addComponent)}
        >
          Add Component
        </Button>
      </div>
    </Layout>
  );
};

export default Components;
