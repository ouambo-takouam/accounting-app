import Image from "next/image";

export default function ProductTypeChoice({
  title,
  description,
  iconName,
  productTypeSelected,
  handleProductTypeChange,
}: {
  title: string;
  description: string;
  iconName: string;
  productTypeSelected: string;
  handleProductTypeChange: Function;
}) {
  return (
    <div
      className="flex items-center h-32 border-b cursor-pointer hover:bg-gray02"
      onClick={() => handleProductTypeChange(iconName)}
    >
      <div className="flex justify-center items-center w-20 h-20 mx-3 rounded-full bg-blue01">
        <span>
          <Image
            src={`/images/png/${iconName}.png`}
            width={50}
            height={50}
            alt="Stock"
          />
        </span>
      </div>
      <div className="flex-1 mr-2">
        <span className="font-bold">{title}</span>
        <p className="text-black02">{description}</p>
      </div>
    </div>
  );
}
