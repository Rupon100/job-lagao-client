import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    const user = { email, pass };
    console.log(user);

    loginUser(email, pass)
      .then((user) => {
         console.log(user);
         navigate(location?.state?.pathname || '/');
      })
      .catch((error) => {
        const err = error.code.split('/')[1];
        if(err == "invalid-credential"){
            // edit those with react hot toast/toastify or sweet alert
            console.log("Invalid crediantials!!");
        }else if(err == "user-not-found"){
            console.log(err);
        }else if(err == "wrong-password"){
            console.log(err);
        }else{
            console.log("Something went wrong!");
        }
      });

  };

  return (
    <div className="bg-slate-100 p-4 ">
      <div className="min-h-screen flex justify-around items-center">
        <div className="hidden md:block basis-1/3 order-2">
          {/* <Lottie animationData={registerAnimation}></Lottie> */}
        </div>
        <div className="space-y-2 w-2/3 max-w-xl">
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            LogIn
          </h2>
          <form
            onSubmit={(e) => handleLogin(e)}
            className="flex flex-col gap-3 border p-4 rounded border-slate-200 shadow w-full max-w-xl"
          >
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="pass"
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-sm text-center">
              New here?{" "}
              <Link state={location?.state} to={"/signup"} className="link text-blue-500">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
