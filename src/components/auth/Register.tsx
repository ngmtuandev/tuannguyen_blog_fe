import { useFormik } from "formik";
import * as Yup from "yup";
import Buttons from "../common/Button";
import InputCommon from "../common/InputCommon";
import InputPassword from "../common/InputPassword";
import { useUserRegister } from "../../hooks";
import { TRegister } from "../../types";
import Swal from "sweetalert2";
import { apiConfirmRegister } from "../../service";
import { toast } from "react-toastify";
import withRouter from "../../hocs/withRouter";
import path from "../../utils/path";
import { useState } from "react";

const Register = ({ navigate }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const { mutate: $register } = useUserRegister();
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("User Name is required"),
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
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values: TRegister) => {
      setIsLoading(true);
      $register(values, {
        onSuccess: (response) => {
          if (response?.status) {
            setIsLoading(false);
            Swal.fire({
              title: "Please Check Your Email For Recive Code",
              input: "number",
              inputAttributes: {
                autocapitalize: "off",
              },
              showCancelButton: true,
              confirmButtonText: "Submit Code",
              showLoaderOnConfirm: true,
              preConfirm: async (code) => {
                try {
                  const response = await apiConfirmRegister({ code: code });
                  if (+response.status) {
                    toast.success("Register Successfully");
                    navigate({
                      pathname: `/${path.LOGIN}`,
                    });
                  } else {
                    toast.error("Register Failure");
                  }
                } catch (error) {
                  Swal.showValidationMessage(`
                    Request failed: ${error}
                  `);
                }
              },
              allowOutsideClick: () => !Swal.isLoading(),
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Register Failure",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          }
        },
        onError() {
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
        <h3>Register</h3>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col items-center gap-4"
        >
          <InputCommon
            isRequired={true}
            type="text"
            label="User Name"
            name="userName"
            placeholder="Enter your user name"
            style="md:w-[400px]"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <small className="text-red-500 text-[10px] -mt-3 font-semibold">
              {formik.errors.userName}
            </small>
          ) : null}

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

          <InputPassword
            label="Confirm Password"
            name="passwordConfirm"
            placeholder="Enter confirm your password"
            style="md:w-[400px]"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
            <small className="text-red-500 text-[10px] -mt-3 font-semibold">
              {formik.errors.passwordConfirm}
            </small>
          ) : null}

          <Buttons
            isLoading={isLoading}
            style="w-[320px] h-12"
            title="Register"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default withRouter(Register);
