export default function CustomTextarea({ label }: { label: string }) {
  return (
    <div className="flex-1 text-sm">
      <p className="leading-8">{label}</p>
      <textarea
        className={`w-full h-20 border border-gray03 focus:outline-none rounded px-2 leading-8 hover:shadow-input`}
      />
    </div>
  );
}
