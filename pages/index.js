import React from "react";
import Head from "next/head";
import Pane from "../components/Pane";
import Tools from "../components/Tools";

export default function Home() {
  const [color, setColor] = React.useState("rgb(0, 0, 0)");
  let arr = [0, 0, 0, 0, 0, 0, 0, 0];
  let random = (e) => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    setColor(`rgb(${red}, ${green}, ${blue})`);
  };
  React.useEffect(() => {
    let timer = setInterval(random, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tools />
      <Pane />
    </div>
  );
}
