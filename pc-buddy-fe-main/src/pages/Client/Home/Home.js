import React, { useEffect } from "react";
import Layout from "../../../layouts/ArticleLayout";
import { useDispatch } from "react-redux";
import {  setKey } from "../../../redux/features/sidebarSlice";
import { Card } from "antd";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setKey(["1"]));
  }, [dispatch]);

  return (
    <Layout title="Home">
      <Card className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="bg-gray-200 py-3 px-6 rounded text-2xl tracking-wide uppercase font-bold">
            Welcome to PC Buddy
          </h1>
          <p className="my-8 text-gray-600 text-lg">
            We're passionate about creating personalized computer systems that
            perfectly fit your needs and preferences, from top-of-the-line
            gaming setups to powerful workstations for creative professionals.
            We understand that every user has different requirements, and that's
            why we're committed to working with you to design a custom computer
            that's tailored specifically to your individual needs. With our
            expertise and your input, we'll create a machine that's not only
            powerful and efficient but also reflects your personal style. Let's
            work together to bring your dream computer to life!{" "}
          </p>
          <h1 className="bg-main/90 text-white p-3 rounded text-xl tracking-wide uppercase">
            We believe that your computer should be just as unique as you are
          </h1>
        </div>
      </Card>
    </Layout>
  );
};

export default Home;
