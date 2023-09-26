import React, { useEffect, useMemo, useState } from "react";
import { setKey } from "../../../../redux/features/sidebarSlice";
import { useDispatch } from "react-redux";
import Layout from "../../../../layouts/ArticleLayout";
import { Button, Card, Form, Select } from "antd";
import SelectComponentType from "../../../../constants/SelectComponentType";
import ComponentComparison from "./ComponentComparison/ComponentComparison";
import BuildComparison from "./BuildComparison/BuildComparison";

const CompareBuild = () => {
  const data = useMemo(() => SelectComponentType, []);
  const [select, setSelect] = useState();
  const [type, setType] = useState();
  const dispatch = useDispatch();
  // console.log(select);

  useEffect(() => {
    dispatch(setKey(["3"]));
  }, [dispatch]);

  return (
    <Layout title="Compare Build">
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
            onFinish={() => console.log("Compare")}
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
                onChange={(v) => setSelect(v)}
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
                  onChange={(v) => setType(v)}
                >
                  {data.map((dat, i) => (
                    <Select.Option key={i} value={dat.toLowerCase()}>
                      {dat}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            )}

            {type && select === "Component vs Component" ? (
              <ComponentComparison />
            ) : (
              select === "Build vs Build" && <BuildComparison />
            )}
            {select && (
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
      </Card>
    </Layout>
  );
};

export default CompareBuild;
