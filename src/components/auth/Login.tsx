import { useFormik } from "formik";
import * as Yup from "yup";
import Buttons from "../common/Button";
import InputCommon from "../common/InputCommon";
import InputPassword from "../common/InputPassword";
import { useUserLogin } from "../../hooks";
import { TLogin } from "../../types";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import withRouter from "../../hocs/withRouter";
import { useState } from "react";
import path from "../../utils/path";
import { useRecoilState } from "recoil";
import { isLoginState } from "../../store/user.store";
import { handleSetLocalStorage } from "../../helper/Xfunction";
import { USER_LOCAL } from "../../utils/constant";

const Login = ({ navigate }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [_, setIsLogin] = useRecoilState(isLoginState);
  const { mutate: $login } = useUserLogin();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
          "Password must contain uppercase, number, lowercase, special character"
        )
        .required("Password is required"),
    }),
    onSubmit: (values: TLogin) => {
      setIsLoading(true);
      $login(values, {
        onSuccess: (response) => {
          setIsLoading(false);
          if (response?.status) {
            navigate({
              pathname: `/${path.HOME}`,
            });
            handleSetLocalStorage(USER_LOCAL.KEY, response?.token);
            setIsLogin(true);
            toast.success("Login successfully");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Login Failure",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          }
        },
        onError() {
          setIsLoading(false);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Register Failure",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        },
      });
    },
  });

  return (
    <div className="w-screen dark:bg-gray-900 h-screen flex-col flex justify-center items-center">
      <div className="flex md:border py-10 border-gray-300 rounded-md shadow-lg md:w-[450px] md:min-h-[450px] items-center flex-col justify-center gap-5">
        <h3>Login</h3>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col items-center gap-4"
        >
          <InputCommon
            isRequired={true}
            type="email"
            label="Email"
            name="email"
            placeholder="Enter your email"
            style="md:w-[400px]"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <small className="text-red-500 text-[10px] -mt-3 font-semibold">
              {formik.errors.email}
            </small>
          ) : null}

          <InputPassword
            label="Password"
            name="password"
            placeholder="Enter your password"
            style="md:w-[400px]"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <small className="text-red-500 text-[10px] -mt-3 font-semibold">
              {formik.errors.password}
            </small>
          ) : null}
          <Buttons
            isLoading={isLoading}
            style="w-[320px] h-12"
            title="Login"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
