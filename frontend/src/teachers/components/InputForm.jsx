/* eslint-disable react/prop-types */
export default function InputForm({ label, value, type, id }) {
  return (
    <div className="py-3">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type ?? "text"}
        value={value}
        className="border-[1px] border-[#B2B0B0] rounded-lg w-full mt-2 px-4 py-[7px]"
        disabled
      />
    </div>
  );
}
