import { Button, Modal } from "antd";
import React, { useState } from "react";

const Modalo = ({ modal, setModal, children, title }) => {
  const [loading, setLoading] = useState(false);
  const handleOk = () => {
    setModal(false);
  };
  const handleCancel = () => {
    setModal(false);
  };
  return (
    <>
      <Modal
        title={title}
        open={modal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        {children}
      </Modal>
    </>
  );
};

export default Modalo;
