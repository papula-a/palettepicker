const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center text-2xl font-semibold mb-6 pb-1 border-b-2 border-gray-300">
          Sign Up
        </h1>

        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-1"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-1"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-200 text-black py-2 rounded-full hover:bg-gray-300 transition-colors">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500">
          Already have an account?{" "}
          <a href="/sign-in" className="text-red-500 hover:text-red-600">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
