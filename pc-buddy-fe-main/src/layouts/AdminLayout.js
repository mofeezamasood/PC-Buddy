import {
  MessageOutlined,
  ProfileOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutePaths from "../routes/types";
import LottieAnimation from "../components/Common/LottieAnimation";
import lottie1 from "../assets/json/load.json";
import { useDispatch, useSelector } from "react-redux";
import { getAdminKey, setAdminKey } from "../redux/features/sidebarSlice";
import { CgComponents } from "react-icons/cg";
import { RxComponentNone } from "react-icons/rx";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Profile", "1", <ProfileOutlined />),
  getItem("Add Component", "2", <AppstoreAddOutlined />),
  getItem("Edit Component", "3", <CgComponents />),
  getItem("Delete Component", "4", <RxComponentNone />),
  getItem("Messages", "5", <MessageOutlined />),
  // getItem("Get Build", "2", <BuildOutlined />),
  // getItem("Compare", "3", <CompressOutlined />),
];

const AdminLayout = ({ children, title, bool }) => {
  document.title = "PC Buddy | " + title;

  const key = useSelector(getAdminKey);
  const [screenLoader, setScreenLoader] = useState(false);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const [time] = useState(600);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    // console.log(e);
    switch (e.key) {
      case "1":
        navigate(RoutePaths.admin);
        break;
      case "2":
        navigate(RoutePaths.addComponent);
        break;
      case "3":
        navigate(RoutePaths.editComponent);
        break;
      case "4":
        navigate(RoutePaths.deleteComponent);
        break;
      case "5":
        navigate(RoutePaths.messages);
        break;
      default:
        return;
    }
    // console.log(e);
    dispatch(setAdminKey(e.keyPath));
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setScreenLoader(false);
    }, time);
    return () => {
      clearTimeout(interval);
    };
  }, [time]);

  return (
    <>
      <Layout
        hasSider
        style={{
          minHeight: "100vh",
        }}
      >
        {!bool && (
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="sticky top-12">
              <div className="bg-gray-500/50 h-12 mx-2 rounded my-10 text-2xl font-bold flex items-center justify-center text-white whitespace-nowrap">
                {collapsed ? "PB" : "PC BUDDY"}
              </div>
              <Menu
                theme="dark"
                selectedKeys={key}
                mode="inline"
                items={items}
                onClick={handleClick}
              />
            </div>
          </Sider>
        )}
        <Layout>
          <Header
            className="text-2xl font-bold uppercase tracking-wide flex flex-col justify-center sticky top-0 shadow-all-rounded z-10"
            style={{
              // padding: 0,
              background: colorBgContainer,
            }}
          >
            {title}
          </Header>
          <Content
            style={{
              margin: "0 16px",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                padding: 24,
                // minHeight: 360,
                background: colorBgContainer,
              }}
              className="h-full"
            >
              {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            PC Buddy ©2023 all rights reserved
          </Footer>
        </Layout>
      </Layout>
      {screenLoader && (
        <div className="flex fixed bg-gray-100 w-screen justify-center items-center z-10 h-screen top-0 bottom-0 left-0 right-0 overflow-y-hidden">
          <LottieAnimation animation={lottie1} time={time} />
        </div>
      )}
    </>
  );
};
export default AdminLayout;
