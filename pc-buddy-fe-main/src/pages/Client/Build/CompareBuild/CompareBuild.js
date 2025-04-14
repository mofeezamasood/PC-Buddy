import React, { useEffect, useState } from "react";
import { setKey } from "../../../../redux/features/sidebarSlice";
import { useDispatch } from "react-redux";
import Layout from "../../../../layouts/ArticleLayout";
import { Button, Card, Form, Select, message } from "antd";
import ComponentType from "../../../../constants/Components";
import ComponentComparison from "./ComponentComparison/ComponentComparison";
import BuildComparison from "./BuildComparison/BuildComparison";
import {
  getAllComponents,
  getComponents,
} from "../../../../api/services/Components";
import { handleError } from "../../../../helpers/toasts";

const CompareBuild = () => {
  const [select, setSelect] = useState();
  const [type, setType] = useState();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [form1] = Form.useForm();
  const [components, setComponents] = useState();
  const [messageApi, contextHolder] = message.useMessage();
  const [buildScore, setBuildScore] = useState({ score1: 0, score2: 0 });
  const [score, setScore] = useState(false);
  const [component1, setComponent1] = useState();
  const [component2, setComponent2] = useState();

  const onFinish = async () => setScore(true);

  useEffect(() => {
    dispatch(setKey(["3"]));
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("hero");
      try {
        const response = await getAllComponents(type);
        setComponents(response?.data ?? []);
      } catch (error) {
        handleError(messageApi, error || "API Error");
      }
    };
    if (type && select) {
      fetchData();
    }
  }, [type]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getComponents();
        setComponents(response?.data?.data ?? []);
      } catch (error) {
        handleError(messageApi, error || "API Error");
      }
    };
    if (select) {
      fetchData();
    }
  }, [select]);

  // console.log(components);

  const clearComponentComparison = () => {
    setComponent1(null);
    setComponent2(null);
    setType(null);
    form1.resetFields();
  };

  return (
    <Layout title="Compare Build">
      {contextHolder}
      <Card className="max-w-4xl mx-auto">
        <div className="flex flex-col">
          <h1 className="bg-gray-200 py-3 px-6 rounded text-xl tracking-wide uppercase font-bold">
            To get started, please select the two options you are considering
          </h1>
          <p className="my-8 text-gray-600 text-lg">
            Write their respective features, benefits, and any other important
            details that you believe may influence your decision. By doing this,
            you will be able to see the similarities and differences between the
            two options and determine which one best meets your needs. So, which
            two options are you currently considering? Please choose them and
            write down their features and benefits so that we can compare them
            together and help you to make the best decision.
          </p>

          <Form
            name="control-hooks"
            layout="vertical"
            onFinish={onFinish}
            form={form}
          >
            <Form.Item
              label="Comparison Between"
              name="comparison between"
              className="w-96 mx-auto"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a type"
                onChange={(v) => {
                  setSelect(v);
                  // form.resetFields();
                  // clearComponentComparison();
                }}
                onClear={() => {
                  setSelect(null);
                  // clearComponentComparison();
                  form.resetFields();
                }}
                allowClear
              >
                <Select.Option value="Component vs Component">
                  Component vs Component
                </Select.Option>
                <Select.Option value="Build vs Build">
                  Build vs Build
                </Select.Option>
              </Select>
            </Form.Item>

            {select === "Component vs Component" && (
              <Form.Item
                label="Select Type"
                name="select type"
                className="w-96 mx-auto"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select a type"
                  allowClear
                  onChange={(v) => {
                    clearComponentComparison();
                    setType(v);
                    // form1.resetFields();
                    // setComponent1(null);
                    // setComponent2(null);
                  }}
                  onClear={() => {
                    clearComponentComparison();
                    // setType(null);
                    // form1.resetFields();
                    // setComponent1(null);
                    // setComponent2(null);
                  }}
                >
                  {ComponentType.map((dat, i) => (
                    <Select.Option key={i} value={dat.toLowerCase()}>
                      {dat}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            )}
            {type && select === "Component vs Component" ? (
              <ComponentComparison
                data={components}
                type={type}
                form1={form1}
                component1={component1}
                component2={component2}
                setComponent1={setComponent1}
                setComponent2={setComponent2}
              />
            ) : (
              select === "Build vs Build" && (
                <BuildComparison
                  data={components}
                  setBuildScore={setBuildScore}
                />
              )
            )}

            {select === "Build vs Build" && (
              <Form.Item className="flex justify-center">
                <Button
                  className="bg-main w-32"
                  type="primary"
                  htmlType="submit"
                >
                  Compare
                </Button>
              </Form.Item>
            )}
          </Form>
        </div>
        <div className="flex justify-center font-mono font-bold text-lg text-emerald-500">
          {score &&
            select === "Build vs Build" &&
            (buildScore?.score1 === buildScore?.score2 ? (
              <p>Both are equally competitive</p>
            ) : buildScore?.score1 > buildScore?.score2 ? (
              <p>Build 1 is better</p>
            ) : (
              <p>build 2 is better</p>
            ))}
        </div>
      </Card>
    </Layout>
  );
};

export default CompareBuild;
