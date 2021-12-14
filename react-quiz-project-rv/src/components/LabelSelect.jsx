import { useFormContext } from "react-hook-form";

const LabelSelect = ({ label, options, validation, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label className="labelinput-label" htmlFor={label}>
        {label}
      </label>
      <select
        {...register(label, validation)}
        {...rest}
        id={label}
        name={label}
        className="lblselect"
      >
        <option value="">--choose a {label}--</option>
        {options.map((value) => (
          <option key={value.id} value={value.id}>
            {value.cat_name}
          </option>
        ))}
      </select>
      {errors[label] && <p className="error-text">{errors[label].message}</p>}
    </div>
  );
};

export default LabelSelect;
