import { url } from "@/constants";
import { setLocalStorage } from "@/utils/localStorage";
import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "@/hooks/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { auth } = useAuth();
  console.log(auth);

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
    <div className="w-10/11 mx-auto md:w-1/2">
      <form
        onSubmit={loginUser}
        id="loginForm"
        name="loginForm"
        className="flex flex-col gap-2"
      >
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          required
          name="password"
          placeholder="Mot de passe"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          className="bg-amber-500 font-bold text-neutral-800"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
