import InputCommon from "../common/InputCommon";
import { useFormik } from "formik";
import * as Yup from "yup";
import Buttons from "../common/Button";
import { dataUserState } from "../../store/user.store";
import { useRecoilState } from "recoil";
import { memo } from "react";

const EditProfile = () => {
  const [dataInfoUser] = useRecoilState(dataUserState);
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
    onSubmit: () => {},
  });
  console.log('1234')
  return (
    <div>
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
          style="w-screen"
          value={dataInfoUser?.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <InputCommon
          isRequired={false}
          label="description"
          name="description"
          placeholder="Enter your description"
          style="w-[400px]"
          value={dataInfoUser?.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <InputCommon
          isRequired={false}
          label="user name"
          name="username"
          placeholder="Enter your user name"
          style="w-[400px]"
          value={dataInfoUser?.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <small className="text-red-500 text-[10px] -mt-3 font-semibold">
            {formik.errors.email}
          </small>
        ) : null}
        <Buttons style="w-[320px] h-12" title="Change Profile" type="submit" />
      </form>
    </div>
  );
};

export default memo(EditProfile);
