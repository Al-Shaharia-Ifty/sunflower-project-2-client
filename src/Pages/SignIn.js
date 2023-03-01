import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";
import ResetModal from "../Modal/ResetModal";

const SignIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [modal, setModal] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInErrorMessage;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, from, navigate]);

  if (loading || gLoading) {
    return <Loading />;
  }

  if (error || gError) {
    signInErrorMessage = (
      <p className="text-red-500 mb-2">{error?.message || gError?.message}</p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div>
      <div className="bg-[#17171A] h-[80px]"></div>
      <div className="flex min-h-screen justify-center items-center bg-black">
        <div
          data-aos="zoom-in"
          className="card  max-w-md bg-[#17171A] shadow-xl text-white"
        >
          <div className="card-body border-2 rounded-lg">
            <h2 className="text-center text-3xl">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered text-black w-full max-w-sm"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Password */}
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered text-black w-full max-w-sm"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {/*  */}
              {signInErrorMessage}
              <input
                className="btn btn-primary bg-gradient-to-r hover:bg-gradient-to-br from-orange-700 to-orange-400 duration-1000 text-white w-full max-w-sm"
                value="login"
                type="submit"
              />
            </form>
            <p>
              New to Novo{" "}
              <Link to="/signUp" className="text-blue-500">
                Create and Account
              </Link>{" "}
            </p>
            <p>
              Are you forget your password?{" "}
              <label
                onClick={() => setModal(true)}
                htmlFor="reset-modal"
                className="text-blue-500"
              >
                Reset Password
              </label>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn text-orange-400 hover:bg-orange-400 btn-outline w-full"
            >
              Sign Up with google
            </button>
          </div>
        </div>
      </div>
      {modal && <ResetModal setModal={setModal} />}
    </div>
  );
};

export default SignIn;
