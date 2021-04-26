import { useFormik } from "formik";
const errMessage = (text) => {
  return (
    <p className="text-center text-white text-lg border-2 p-2 bg-red-500 rounded-lg -mb-3 -mt-3 placeholder-gray-500 placeholder-opacity-5 ">
      {text}
    </p>
  );
};
export default function Login() {
  const validate = (values) => {
    const { name, pass } = values;
    const errors = {};
    if (!name) {
      errors.name = "Required";
    } else if (name.length < 6 || name.length >= 15) {
      errors.pass = "Username length must be min 6 and max 15 character ";
    }
    if (!pass) {
      errors.pass = "Required";
    } else if (pass.length < 6 || pass.length >= 25) {
      errors.pass = "Password length must be min 6 and max 25 character ";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      pass: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values.null, 2));
    },
  });
  return (
    <div className="container h-screen flex">
      <div className="mx-auto flex flex-col justify-center w-136 p-3">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-7 border-2 transition duration-500 ease-in-out hover:border-blue-500 pl-8 pr-8"
        >
          <p className="text-center text-5xl tracking-wider mt-20 -mb-20 placeholder-gray-500 placeholder-opacity-5">
            Log in
          </p>
          <input
            className="w-full outline-none h-14 rounded-md pl-5 pr-5 text-xl border-2 focus:border-blue-700 transition duration-200 ease-in-out mt-24"
            placeholder="Username"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name
            ? errMessage(formik.errors.name)
            : null}
          <input
            className="w-full outline-none h-14 rounded-md pl-5 pr-5 text-xl border-2 focus:border-blue-700 transition duration-200 ease-in-out"
            placeholder="Password"
            type="text"
            name="pass"
            value={formik.values.pass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.pass && formik.errors.pass
            ? errMessage(formik.errors.pass)
            : null}
          <button
            type="submit"
            className="w-full h-14 text-2xl text-gray-500 border-2 border-blue-400 rounded-lg mt-10 hover:border-white hover:bg-blue-400 hover:text-white outline-none transition duration-300 ease-in-out focus:outline-none mb-24"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
