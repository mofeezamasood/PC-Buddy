import React, { useEffect, useMemo } from "react";
import Layout from "../../../../layouts/ArticleLayout";
import { useDispatch } from "react-redux";
import { setKey } from "../../../../redux/features/sidebarSlice";
import { Button, Card, Image, Pagination } from "antd";
import BuildsData from "../../../../constants/BuildsData";

const GetBuilds = () => {
  const data = useMemo(() => BuildsData, []);
  const dispatch = useDispatch();
  // console.log(key);

  useEffect(() => {
    dispatch(setKey(["2"]));
  }, [dispatch]);

  return (
    <Layout title="Get Build">
      {data?.map((dat, i) => (
        <Card key={i} className="my-3">
          <div className="grid grid-cols-4 items-center shadow-all-rounded">
            <div className="ml-5">
              <Image height={250} src={dat.Image} />
            </div>
            <div className="w-full flex justify-between items-center p-5 col-span-3">
              <div>
                <p>
                  <strong>Processor:</strong> {dat.Processor}
                </p>
                <p>
                  <strong>Processor Cooler: </strong> {dat["Processor Cooler"]}
                </p>
                <p>
                  <strong>Motherboard: </strong> {dat.Motherboard}
                </p>
                <p>
                  <strong>RAM: </strong> {dat.RAM}
                </p>
                <p>
                  <strong>SSD: </strong> {dat.SSD}
                </p>
                <p>
                  <strong>GPU: </strong> {dat.GPU}
                </p>
                <p>
                  <strong>PSU: </strong> {dat.PSU}
                </p>
                <p className="mb-0">
                  <strong>Casing: </strong> {dat.Casing}
                </p>
              </div>
              <div className="grid space-y-3">
                <Button className="bg-main w-32" type="primary">
                  Customize
                </Button>
                <Button className="w-32">Copy as Text</Button>
                <Button className="w-32">Download as Image</Button>
              </div>
            </div>
          </div>
        </Card>
      ))}

      <div className="flex items-center justify-center my-20">
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </Layout>
  );
};

export default GetBuilds;
