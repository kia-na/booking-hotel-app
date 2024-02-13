import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { user, login } = useAuth();
  const [email, setEmail] = useState("kiana@gmail.com");
  const [pass, setPass] = useState("1234");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email === user.email && pass === user.pass) {
      login();
      navigate("/", { replace: true });
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[25rem] mx-auto flex flex-col gap-4 rounded-[1rem] bg-gra-100 shadow-lg border-[1.5px] sm:p-7 p-4 mt-5 sm:mt-8 md:mt-14"
    >
      <span className="font-bold text-[1.6rem]">Login</span>
      <label className="font-extralight">
        Email <br />
        <input
          type="email"
          placeholder="Email..."
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-50 text-gray-500 placeholder:text-gray-400 placeholder:font-extralight rounded-lg px-2 py-1 shadow-md border-[1px] transition-all duration-200 focus:scale-105 outline-none"
        />
      </label>
      <label className="font-extralight">
        Password <br />
        <input
          type="password"
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password..."
          defaultValue={pass}
          className="w-full bg-gray-50 text-gray-500 placeholder:text-gray-400 placeholder:font-extralight rounded-lg px-2 py-1 shadow-md border-[1px] transition-all duration-200 focus:scale-105 outline-none"
        />
      </label>
      <button
        type="submit"
        className="font-extralight text-sm bg-blue-700 text-white px-3 py-[.4rem] mt-2 cursor-pointer rounded-lg"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
