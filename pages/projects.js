import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loading from "../components/Loading";
import Check from "../components/check";
import {
  setProjects,
  addProject,
} from "../app/features/project/projectSlice.js";
import { useDispatch } from "react-redux";

export default function Projects() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [size, setSize] = React.useState(16);
  const user = useSelector((state) => state.user.user);
  const [projectName, setProjectName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const projects = useSelector((state) => state.project.projects);
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

  const createProject = async (e) => {
    if (!projectName) {
      return;
    }
    if (projects.find((project) => project.pname === projectName)) {
      alert("There is already a project with this name");
      return;
    }
    let project = {
      pname: projectName,
      psize: [parseInt(size), parseInt(size)],
      cellColors: { 999999: "red" },
      userId: user._id,
    };
    let response = await fetch("http://localhost:5000/api/project/save", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    });
    if (response.status !== 201) {
      return;
    }
    dispatch(addProject(project));
    router.push("/pixarts/" + projectName);
  };

  const openProject = (e, pname) => {
    e.preventDefault();
    router.push("/pixarts/" + pname);
  };

  React.useEffect(async () => {
    if (!user?.name) {
      router.push("/login");
      return;
    }
    let url = "http://localhost:5000/api/project/" + user.name;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.status === 200) {
      const res = await response.json();
      dispatch(setProjects(res.projs));
      setIsLoading(false);
    }
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
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
        <div className="w-3/5 h-3/4 px-4">
          {projects &&
            projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="border-2 border-gray-300 p-2 mb-2 rounded-md px-3"
                >
                  <p
                    onClick={(e) => openProject(e, project.pname)}
                    className="cursor-pointer text-xl font-ruda hover:underline"
                  >
                    {project.pname}
                  </p>
                  <p className="text-right">{project.pdate}</p>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col w-2/5 h-3/4 items-center border border-gray-300 rounded-lg p-5">
          <label htmlFor="proj-name" className="text-3xl font-ruda mb-3 mt-10">
            Project name
          </label>
          <input
            className="outline-none border border-gray-300 rounded-md h-12 text-2xl px-5 tracking-wide text-gray-600 font-ruda"
            type="text"
            name="proj-name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
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
            onClick={createProject}
            className="bg-blue-400 py-3 px-14 rounded-md mt-52 font-ruda text-2xl text-white focus:outline-none"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
