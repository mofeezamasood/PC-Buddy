import { Tooltip } from "antd";

const TooltipToast = ({ tooltip, children }) => {
  return (
    <Tooltip
      placement="right"
      title={<p className="text-xs mb-0">{tooltip}</p>}
      trigger="focus"
    >
      {children}
    </Tooltip>
  );
};

export default TooltipToast;
