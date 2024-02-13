function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[25rem] mx-auto flex flex-col gap-4 rounded-[1rem] bg-gra-100 shadow-blueShadowSm sm:p-7 p-4 mt-5 sm:mt-8 md:mt-14 md:gap-6"
    >
      <input
        type="text"
        placeholder="Name..."
        className="bg-gray-50 text-gray-500 placeholder:text-gray-400 placeholder:font-extralight rounded-lg px-2 py-1 shadow-md border-[1px] transition-all duration-200 focus:scale-105 outline-none"
      />
      <input
        type="email"
        placeholder="Email..."
        className="bg-gray-50 text-gray-500 placeholder:text-gray-400 placeholder:font-extralight rounded-lg px-2 py-1 shadow-md border-[1px] transition-all duration-200 focus:scale-105 outline-none"
      />
      <input
        type="password"
        placeholder="Password..."
        className="bg-gray-50 text-gray-500 placeholder:text-gray-400 placeholder:font-extralight rounded-lg px-2 py-1 shadow-md border-[1px] transition-all duration-200 focus:scale-105 outline-none"
      />
      <button
        type="submit"
        className="bg-blue-700 text-white px-3 py-1 cursor-pointer rounded-lg"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
