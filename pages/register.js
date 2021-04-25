export default function Register() {
  const test = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container h-screen flex">
      <div className="mx-auto flex flex-col justify-center w-136 p-3">
        <form
          action=""
          className="flex flex-col gap-14 border-2 transition duration-500 ease-in-out hover:border-blue-500 pl-8 pr-8"
        >
          <p className="text-center text-5xl tracking-wider mt-20 -mb-20 placeholder-gray-500 placeholder-opacity-5">
            Sign up
          </p>
          <input
            className="w-full outline-none h-14 rounded-md pl-5 pr-5 text-xl border-2 focus:border-blue-700 transition duration-200 ease-in-out mt-24"
            placeholder="Username"
            type="text"
            name=""
            id=""
          />
          <input
            className="w-full outline-none h-14 rounded-md pl-5 pr-5 text-xl border-2 focus:border-blue-700 transition duration-200 ease-in-out"
            placeholder="E-mail"
            type="text"
            name=""
            id=""
          />
          <input
            className="w-full outline-none h-14 rounded-md pl-5 pr-5 text-xl border-2 focus:border-blue-700 transition duration-200 ease-in-out"
            placeholder="Password"
            type="text"
            name=""
            id=""
          />
          <p className="text-center text-white text-xl border-2 p-2 bg-red-400 rounded-lg -mb-3 placeholder-gray-500 placeholder-opacity-5">
            This {"{ mail }"} is already in use
          </p>
          <button
            onClick={test}
            className="w-full h-14 text-2xl text-gray-500 border-2 border-blue-400 rounded-lg -mt-5 hover:border-white hover:bg-blue-400 hover:text-white outline-none transition duration-300 ease-in-out focus:outline-none mb-24"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
