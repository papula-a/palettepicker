// pages/signin.js

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center text-2xl font-semibold mb-6 pb-1 border-b-2 border-gray-300">
          Sign In
        </h1>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-1"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-200 text-black py-2 rounded-full hover:bg-gray-300 transition-colors">
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-gray-500">
          Not a Member?{" "}
          <a href="/sign-up" className="text-red-500 hover:text-red-600">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
