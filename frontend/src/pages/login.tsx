import { url } from "@/constants";
import { setLocalStorage } from "@/utils/localStorage";
import React, { useState } from "react";
// @ts-ignore
import { jwtDecode } from "jwt-decode";
import logo from "@/assets/Logo_Calmedica.svg";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${url}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "test@test.fr", password: "test" }),
      });
      const res = await response.json();
      const { token } = res;
      const decodedToken = jwtDecode(token);

      setLocalStorage("token", decodedToken);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 flex justify-center items-center bg-white">
        <img src={logo} alt="Logo" className="size-[32rem]" />
      </div>

      <div className="w-1/2 flex justify-center items-center bg-gray-100">
        <div className="p-8 rounded-lg border bg-opacity-75 bg-white max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-2xl font-bold text-blue-900">Login</h2>
          </div>
          <form onSubmit={loginUser} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Mot de passe"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
