import { useForm, useFormContext } from "react-hook-form";

const alertWarn = (msg) => alert({ message: msg, type: "warning" });
const LabelInput = ({
  label,
  type,
  defaultValue,
  validation,
  isActive = false,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="col-span-6 sm:col-span-3">
        <label className="lbl" htmlFor={label}>
          {label}
        </label>
        <input
          {...register(label, validation)}
          defaultValue={defaultValue}
          placeholder={label}
          type={type}
          id={label}
          name={label}
          {...rest}
        />
      </div>
      {errors[label] && (
        <p className="validationmsg">{errors[label].message}</p>
      )}
    </>
  );
};

export default LabelInput;
