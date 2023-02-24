import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  let signInErrorMessage;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [gUser, from, navigate, user]);

  if (gLoading || loading || updating) {
    return <Loading />;
  }
  if (error || gError || updateError) {
    signInErrorMessage = (
      <p className="text-red-500 mb-2">{error?.message || gError?.message}</p>
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div>
      <div className="bg-[#17171A] h-[80px]"></div>
      <div className="flex min-h-screen justify-center items-center bg-black">
        <div
          data-aos="zoom-in"
          className="card  max-w-md bg-[#17171A] text-white shadow-xl"
        >
          <div className="card-body sm:w-[440px] w-80  border-2 rounded-lg">
            <h2 className="text-center text-3xl">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered text-black w-full max-w-sm"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
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
                className="btn btn-primary bg-gradient-to-r from-orange-700 to-orange-500 text-white w-full max-w-sm"
                value="Sign Up"
                type="submit"
              />
            </form>
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
    </div>
  );
};

export default SignUp;
