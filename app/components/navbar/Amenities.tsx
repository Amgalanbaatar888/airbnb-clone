"use client";

import Container from "../Container";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./Categories.module.css";
import { WiFi } from "../icons/Wifa";
import { TV } from "../icons/Tv";
import { Kitchen } from "../icons/Kitchen";
import { Washer } from "../icons/Washer";
import { Parking } from "../icons/Parking";
import { AirCondition } from "../icons/AirCondition";
import { WorkPlace } from "../icons/WorkPlace";
import { Pool } from "../icons/Pool";
import { HotTub } from "../icons/HotTub";
import { BBgrill } from "../icons/BBQgrill";
import { Outdoor } from "../icons/Outdoor";
import { FirePit } from "../icons/FirePit";
import { PoolTable } from "../icons/PoolTable";
import { Exercise } from "../icons/Exercise";
import { Shower } from "../icons/Shower";
import AmenityBox from "../AmenityBox";
import { useCallback, useState } from "react";

export const amenities = [
  {
    label: "Wifi",
    icon: WiFi,
    description: "This property is close to the beach!",
    selected: false,
  },
  {
    label: "TV",
    icon: TV,
    description: "This property is has windmills!",
    selected: false,
  },
  {
    label: "Kitchen",
    icon: Kitchen,
    description: "This property is modern!",
    selected: false,
  },
  {
    label: "washing machine",
    icon: Washer,
    description: "This property is in the countryside!",
    selected: false,
  },
  {
    label: "Free parking",
    icon: Parking,
    description: "This is property has a beautiful pool!",
    selected: false,
  },
  {
    label: "Air conditioning",
    icon: AirCondition,
    description: "This property is on an island!",
    selected: false,
  },
  {
    label: " Workspace",
    icon: WorkPlace,
    description: "This property is near a lake!",
    selected: false,
  },
  {
    label: "Pool",
    icon: Pool,
    description: "This property has skiing activies!",
    selected: false,
  },
  {
    label: "Hot tub",
    icon: HotTub,
    description: "This property is an ancient castle!",
    selected: false,
  },
  {
    label: "BBQ grill",
    icon: BBgrill,
    description: "This property is in a spooky cave!",
    selected: false,
  },
  {
    label: "Outdoor dinning",
    icon: Outdoor,
    description: "This property offers camping activities!",
    selected: false,
  },
  {
    label: "Fire pit",
    icon: FirePit,
    description: "This property is in arctic environment!",
    selected: false,
  },
  {
    label: "Pool table ",
    icon: PoolTable,
    description: "This property is in the desert!",
    selected: false,
  },
  {
    label: "Exercise room",
    icon: Exercise,
    description: "This property is in a barn!",
    selected: false,
  },
  {
    label: "Shower/bath",
    icon: Shower,
    description: "This property is brand new and luxurious!",
    selected: false,
  },
];

const Amenities = () => {
  const params = useSearchParams();
  const amenity = params?.get("amenity");
  const pathname = usePathname();
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]); // State to hold selected amenities

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  const handleAmenitySelect = useCallback(
    (label: string, selected: boolean) => {
      setSelectedAmenities((prevSelected) => {
        if (selected) {
          if (!prevSelected.includes(label)) {
            return [...prevSelected, label];
          }
        } else {
          return prevSelected.filter((item) => item !== label);
        }
        return prevSelected;
      });
    },
    []
  );

  return (
    <Container>
      <div
        className={`
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto
        overflow-
        ${styles.amenities}
        `}
      >
        {amenities.map((item) => (
          <AmenityBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            item={item}
            onSelect={handleAmenitySelect} // Pass onSelect callback
            selectedAmenities={selectedAmenities}
          />
        ))}
      </div>
    </Container>
  );
};

export default Amenities;
