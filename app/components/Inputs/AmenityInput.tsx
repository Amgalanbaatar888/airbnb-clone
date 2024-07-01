import { IconType } from "react-icons";
import React from "react"; // Import React for JSX usage

interface AmenityInputProps {
  icon: IconType;
  label: string;
  selected: boolean;
  onClick: (value: string) => void;
}
const AmenityInput: React.FC<AmenityInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-neutral-500
        transition
        cursor-pointer
        ${selected ? "border-neutral-500" : "border-neutral-200"}
      `}
    >
      <Icon size={32} />
      <div className="text-sm font-semibold ml-[9px]">{label}</div>
    </div>
  );
};

export default AmenityInput;
