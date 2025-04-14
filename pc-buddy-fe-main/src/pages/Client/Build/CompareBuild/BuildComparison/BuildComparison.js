import {  Form, Select } from "antd";
import React, { useEffect, useState } from "react";

const BuildComparison = ({ data, setBuildScore }) => {
  const [buildOneScore, setBuildOneScore] = useState({
    processor: 0,
    cpuCooler: 0,
    motherboard: 0,
    ram: 0,
    storage: 0,
    psu: 0,
    gpu: 0,
  });

  const [buildTwoScore, setBuildTwoScore] = useState({
    processor: 0,
    cpuCooler: 0,
    motherboard: 0,
    ram: 0,
    storage: 0,
    psu: 0,
    gpu: 0,
  });

  const handleBuildScoreChange = (score, type, status) => {
    if (status === 1) {
      setBuildOneScore((prev) => ({
        ...prev,
        [type]: score,
      }));
    } else {
      setBuildTwoScore((prev) => ({
        ...prev,
        [type]: score,
      }));
    }
  };

  const getScore = (type, id) => {
    return data[type]?.find((val) => val._id === id)?.score ?? 0;
  };

  useEffect(() => {
    const totalScore1 = Object.values(buildOneScore).reduce(
      (acc, value) => acc + value,
      0
    );
    setBuildScore((prev) => ({ ...prev, score1: totalScore1 }));
  }, [buildOneScore]);

  useEffect(() => {
    const totalScore2 = Object.values(buildTwoScore).reduce(
      (acc, value) => acc + value,
      0
    );
    setBuildScore((prev) => ({ ...prev, score2: totalScore2 }));
  }, [buildTwoScore]);

  return (
    <>
      <div className="w-full grid grid-cols-2 gap-3">
        <div>
          <p className="text-lg font-bold">Build 1</p>
          <Form.Item
            label="Select Processor"
            name="select-processor-1"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select Processor"
              allowClear
              // onChange={(e) => data.processors?.find((data) => data.name === e).score}
              onChange={(e) =>
                handleBuildScoreChange(
                  getScore("processors", e),
                  "processor",
                  1
                )
              }
            >
              {data?.processors?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Select CPU Cooler"
            name="select-cpu-cooler-1"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select CPU Cooler"
              allowClear
              onChange={(e) =>
                handleBuildScoreChange(
                  getScore("cpuCoolers", e),
                  "cpuCooler",
                  1
                )
              }
            >
              {data?.cpuCoolers?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Select Motherboard"
            name="select-motherboard-1"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select Motherboard"
              allowClear
              onChange={(e) =>
                handleBuildScoreChange(
                  getScore("motherboards", e),
                  "motherboard",
                  1
                )
              }
            >
              {data?.motherboards?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Select RAM"
            name="select-ram-1"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select RAM"
              allowClear
              onChange={(e) =>
                handleBuildScoreChange(getScore("rams", e), "ram", 1)
              }
            >
              {data?.rams?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Select Storage (SSD/HDD)"
            name="select-storage(SSD/HDD)-1"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select Storage (SSD/HDD)"
              allowClear
              onChange={(e) =>
                handleBuildScoreChange(getScore("storages", e), "storage", 1)
              }
            >
              {data?.storages?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Select PSU"
            name="select-psu-1"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select PSU"
              allowClear
              onChange={(e) =>
                handleBuildScoreChange(getScore("psus", e), "psu", 1)
              }
            >
              {data?.psus?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Select GPU"
            name="select-gpu-1"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select GPU"
              allowClear
              onChange={(e) =>
                handleBuildScoreChange(getScore("gpus", e), "gpu", 1)
              }
            >
              {data?.gpus?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div>
          <p className="text-lg font-bold">Build 2</p>
          <Form.Item
            label="Select Processor"
            name="select-processor-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select Processor"
              allowClear
              // onChange={(e) => data.processors?.find((data) => data.name === e).score}
              onChange={(e) =>
                handleBuildScoreChange(
                  getScore("processors", e),
                  "processor",
                  2
                )
              }
            >
              {data?.processors?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Select CPU Cooler"
            name="select-cpu-cooler-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select CPU Cooler"
              allowClear
              onChange={(e) =>
                handleBuildScoreChange(
                  getScore("cpuCoolers", e),
                  "cpuCooler",
                  1
                )
              }
            >
              {data?.cpuCoolers?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Select Motherboard"
            name="select-motherboard-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select Motherboard"
              allowClear
              onChange={(e) =>
                handleBuildScoreChange(
                  getScore("motherboards", e),
                  "motherboard",
                  2
                )
              }
            >
              {data?.motherboards?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Select RAM"
            name="select-ram-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select RAM"
              allowClear
              onChange={(e) =>
                handleBuildScoreChange(getScore("rams", e), "ram", 2)
              }
            >
              {data?.rams?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Select Storage (SSD/HDD)"
            name="select-storage(SSD/HDD)-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select Storage (SSD/HDD)"
              allowClear
              onChange={(e) =>
                handleBuildScoreChange(getScore("storages", e), "storage", 2)
              }
            >
              {data?.storages?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Select PSU"
            name="select-psu-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select PSU"
              allowClear
              onChange={(e) =>
                handleBuildScoreChange(getScore("psus", e), "psu", 2)
              }
            >
              {data?.psus?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Select GPU"
            name="select-gpu-2"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select GPU"
              allowClear
              onChange={(e) =>
                handleBuildScoreChange(getScore("gpus", e), "gpu", 2)
              }
            >
              {data?.gpus?.map((val) => (
                <Select.Option key={val._id} value={val?._id}>
                  {val.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>
      </div>
    </>
  );
};

export default BuildComparison;
