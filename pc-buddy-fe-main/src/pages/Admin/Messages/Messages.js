import React, { useEffect, useState } from "react";
import { setAdminKey } from "../../../redux/features/sidebarSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../../layouts/AdminLayout";
import { Table } from "antd";
import RoutePaths from "../../../routes/types";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Last Message",
    dataIndex: "last message",
  },
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Hussain Raza ${i}`,
    description: "no need for description",
    "last message": `last message. ${i}`,
  });
}

const Messages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(key);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(setAdminKey(["5"]));
  }, [dispatch]);

  return (
    <Layout title="Messages">
      <Table
        rowSelection={rowSelection}
        dataSource={data}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate(RoutePaths.messageChat);
            }, // click row
          };
        }}
      />
    </Layout>
  );
};

export default Messages;
