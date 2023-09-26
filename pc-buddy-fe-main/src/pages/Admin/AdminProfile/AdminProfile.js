import { Button, Divider, Image, message } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/AdminLayout";
import { useDispatch } from "react-redux";
import { setAdminKey } from "../../../redux/features/sidebarSlice";
import { RxAvatar } from "react-icons/rx";
import { AiFillDelete, AiFillEdit, AiTwotoneMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { FaBirthdayCake } from "react-icons/fa";
// import Modalo from "../../components/Common/Modalo";
import EditModal from "./EditModal/EditModal";
import { useNavigate } from "react-router-dom";
import RoutePaths from "../../../routes/types";

const AdminProfile = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleDelele = () => {
    messageApi.open({
      type: "success",
      content: "The Account has been deleted!",
    });
  };

  useEffect(() => {
    dispatch(setAdminKey(["1"]));
  }, [dispatch]);

  return (
    <Layout title="Admin Profile">
      {contextHolder}
      <EditModal modal={modal} setModal={setModal} />
      <div className="flex justify-end gap-2">
        <Button
          type="ghost"
          icon={<AiFillEdit />}
          className="bg-emerald-500 text-white"
          onClick={() => setModal(true)}
        >
          Edit
        </Button>
        <Button
          type="primary"
          danger
          icon={<AiFillDelete />}
          onClick={handleDelele}
        >
          Delete
        </Button>
      </div>
      <div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border hover:shadow-all dark:bg-gray-800 dark:border-gray-700 md:max-w-sm rounded-xl">
        <div className="pb-6">
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-center w-full">
              <div className="relative m-2">
                <Image
                  loading="lazy"
                  className="overflow-hidden rounded"
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                />
              </div>
            </div>
          </div>
          <Divider />
          <div className="m-3 space-y-3">
            <div className="flex gap-2 items-center">
              <RxAvatar size={30} />
              <p className="mb-0 text-lg tracking-widest">Hussain Raza</p>
            </div>
            <div className="flex gap-2 items-center">
              <AiTwotoneMail size={30} />
              <p className="mb-0 text-lg tracking-widest">
                hussainRaza@gmail.com
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaBirthdayCake size={30} />
              <p className="mb-0 text-lg tracking-widest">Birthday</p>
            </div>
            <div className="flex gap-2 items-center">
              <ImLocation2 size={30} />
              <p className="mb-0 text-lg tracking-widest">location</p>
            </div>
            <div className="flex justify-end">
              <Button danger onClick={() => navigate(RoutePaths.signin)}>
                Sign out
              </Button>
            </div>
          </div>
          <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
            <div className="absolute flex -space-x-12 rounded-b-2xl">
              <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-blue-400/90 group-hover:bg-blue-600/90 z-10"></div>
              <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-blue-300/90 group-hover:bg-blue-500/90 z-20"></div>
              <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-blue-200/90 group-hover:bg-blue-400/90 z-30"></div>
              <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-blue-100/90 group-hover:bg-blue-300/90 z-40"></div>
              <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-blue-50/90 group-hover:bg-blue-200/90 z-50"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminProfile;
