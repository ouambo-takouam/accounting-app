export default function CustomInput({
  label,
  name,
  type,
  formik,
}: {
  label: string;
  name: string;
  type: string;
  formik: { handleChange: Function; values: Object };
}) {
  return (
    <div className="flex-1 text-sm">
      <p className="leading-7">{label}</p>
      <input
        type={type}
        name={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
        className={`w-full border border-gray03 focus:outline-none rounded px-2 leading-8 hover:shadow-input focus:shadow-search`}
      />
    </div>
  );
}
