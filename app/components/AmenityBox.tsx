"use client";

import { useCallback } from "react";
import { IconType } from "react-icons";

interface AmenityBoxProps {
  label: string;
  icon: IconType;
  item: {
    label: string;
    icon: () => JSX.Element;
    description: string;
    selected: boolean;
  };
  onSelect: (label: string, isSelected: boolean) => void;
  selectedAmenities: string[];
}
const AmenityBox: React.FC<AmenityBoxProps> = ({
  label,
  icon: Icon,
  item,
  onSelect,
  selectedAmenities,
}) => {
  const handleClick = useCallback(() => {
    const updatedSelected = !item.selected;
    onSelect(label, updatedSelected);
  }, [label, item.selected, onSelect]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${
          selectedAmenities
            ? "text-neutral-800 border-b-neutral-800"
            : "text-neutral-500 border-transparent"
        }
      `}
    >
      <div>
        <Icon size={26} />
      </div>
      <div className="font-medium text-sm ml-2">{label}</div>
    </div>
  );
};

export default AmenityBox;
