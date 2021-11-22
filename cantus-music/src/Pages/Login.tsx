import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const passwordForgotten = () => {
    // yeah i'll take care of this...
    alert("that sucks");
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="log">
          <p>Email Address or Username</p>
        </div>
        <input
          type="text"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <div className="log">
          <p>Password.</p>
        </div>
        <input
          type="password"
          placeholder="password"
          {...(register("password"), { required: true })}
        />

        <Link to="#" onClick={passwordForgotten} style={{ color: "#111111" }}>
          forgot your password?
        </Link>

        <input type="submit" className="submit-btn" value="Log in" />
      </form>
    </div>
  );
};

export default Login;
