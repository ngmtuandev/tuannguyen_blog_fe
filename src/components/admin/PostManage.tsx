import * as Yup from "yup";
import { useFormik } from "formik";
import InputCommon from "../common/InputCommon";
import Buttons from "../common/Button";
// test github
const PostManage = () => {
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
        .required("Email is required")
    }),
    onSubmit: () => {

    },
  });
  return (
    <div className="w-[80%] px-6 pt-6 h-screen">
      <div>
        <h3 className="font-bold my-4">Create Post</h3>
      </div>
      <div className="w-[100%]">
        <form
          onSubmit={formik.handleSubmit}
          className="w-[100%] flex flex-col gap-4"
        >
          <div className="flex gap-40">
            <InputCommon
              isRequired={true}
              type="text"
              label="User Name"
              name="userName"
              placeholder="Enter your user name"
              style="w-[700%]"
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
              type="text"
              label="User Name"
              name="userName"
              placeholder="Enter your user name"
              style="w-[700%]"
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <small className="text-red-500 text-[10px] -mt-3 font-semibold">
                {formik.errors.userName}
              </small>
            ) : null}
          </div>

          <Buttons
            // isLoading={isLoading}
            style="w-[320px] h-12"
            title="Register"
            type="submit"
          />
        </form>
      </div>
    </div>
  )
}

export default PostManage