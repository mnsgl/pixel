import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

export default function Home() {
  let router = useRouter();
  const user = useSelector((state) => state.user.isLogin);

  React.useEffect(async () => {
    if (!user?.name) {
      router.push("/login");
      return;
    } else {
      router.push("/projects");
      return;
    }
  }, []);

  return <Loading />;
}
