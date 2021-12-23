import { useFormContext } from "react-hook-form";

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
      <div>
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
