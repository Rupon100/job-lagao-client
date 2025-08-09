import Lottie from "lottie-react";
import registerAnimation from "../../public/Login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";
import { auth } from '../Firebase/firebase.init'

const Register = () => {

    const { createUser, updateName } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.state.pathname)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.pass.value;

        const newUser = { name, email, pass };
        console.log(newUser);

        createUser(email, pass)
        .then((user) => {
            updateName(name)
            .then(() => {
                console.log(user);
                navigate(location?.state?.pathname || '/');
                console.log("Added User Name");
            })
            .catch(error => {
                console.log(error.message);
            })
        })
        .catch(error => {
            if(error.code.split('/')[1] == "email-already-in-use"){
                console.log("'Please Login!!");
            }
            console.log(error.message);
        })

    }


  return (
    <div className="bg-slate-100 p-4 ">
      <div className="min-h-screen flex justify-around items-center">
        <div className="hidden md:block basis-1/3 order-2">
          <Lottie animationData={registerAnimation}></Lottie>
        </div>
        <div className="space-y-2 w-2/3 max-w-xl">
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            Register Now
          </h2>
          <form onSubmit={(e) => handleRegister(e)} className="flex flex-col gap-3 border p-4 rounded border-slate-200 shadow w-full max-w-xl">
            <label className="label">Name</label>
            <input name="name" type="text" className="input w-full" placeholder="Name" />
            <label className="label">Email</label>
            <input name="email" type="email" className="input w-full" placeholder="Email" />
            <label className="label">Password</label>
            <input
              name="pass"
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="text-sm text-center" >Already Have an Account? <Link to={'/login'} className="link text-blue-500" >Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
