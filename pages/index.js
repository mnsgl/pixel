import React from "react";
import Head from "next/head";

export default function Home() {
  const [size, setSize] = React.useState(16);

  const handleChange = (e) => {
    let inputSize = e.target.value;
    if (inputSize > 64) {
      setSize(64);
      return;
    }
    if (inputSize < 0) {
      setSize(0);
      return;
    }

    setSize(inputSize);
  };

  const createFile = () => {};

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ruda&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex w-2/3 h-screen m-auto items-center">
        <div className="w-3/5 h-3/4 p-4">
          {[...Array(9).keys()].map((elem, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 p-2 mb-2 rounded-md"
            >
              <p className="cursor-pointer">Name</p>
              <p>Date</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-2/5 h-3/4 items-center border-2 border-gray-500 p-5">
          <label htmlFor="proj-name" className="text-3xl font-ruda mb-3 mt-10">
            Project name
          </label>
          <input
            className="outline-none border border-gray-300 rounded-md h-12 text-2xl px-5 tracking-wide text-gray-600 font-ruda"
            type="text"
            name="proj-name"
          />
          <label htmlFor="proj-name" className="text-3xl font-ruda mb-3 mt-10">
            Size
          </label>
          <div>
            <input
              value={size}
              onChange={handleChange}
              className="outline-none border border-gray-300 rounded-md h-12 w-14 text-2xl px-2 tracking-wide text-gray-600 font-ruda mr-4"
              type="text"
              name="proj-name"
            />
            X
            <input
              value={size}
              onChange={handleChange}
              className="outline-none border border-gray-300 rounded-md h-12 w-14 ml-4 text-2xl px-2 tracking-wide text-gray-600 font-ruda"
              type="text"
              name="proj-name"
            />
          </div>
          <button
            onClick={createFile}
            className="bg-blue-400 py-3 px-14 rounded-md mt-52 font-ruda text-2xl text-white focus:outline-none"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
