import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  userName: string;
};

const Registration: React.FC = () => {
  const { register, handleSubmit, formState:{errors}} = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  let emailPattern = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  return (
    <div className="registration">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="reg-questions">
            <p>What's your email?</p>
          </div>
          <input
            type="text"
            placeholder="email"
            {...register("email", { required: true, pattern: emailPattern })}
          />

          {errors.email && <i>Please enter a valid email format</i>}
          <div className="reg-questions">
            <p>Crate a password.</p>
          </div>

          <input
            type="password"
            placeholder="password"
            {...(register("password"),
            { required: true, minLength: 8, maxLength: 24 })}
          />

          {errors.password && <i> Password minimum length is 8 max is 24</i>}

          <div className="reg-questions">
            <p>What do you want to be called?</p>
          </div>
          <input
            type="text"
            placeholder="username"
            {...register("userName", {
              required: true,
              minLength: 5,
              maxLength: 12,
            })}
          />

          {errors.userName && <i>Username minimum length is 5 max is 12</i>}

          <input type="submit" className="submit-btn" />
        </form>
    </div>
  );
};

export default Registration;
