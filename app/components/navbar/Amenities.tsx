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
  },
  {
    label: "TV",
    icon: TV,
    description: "This property is has windmills!",
  },
  {
    label: "Kitchen",
    icon: Kitchen,
    description: "This property is modern!",
  },
  {
    label: "washing machine",
    icon: Washer,
    description: "This property is in the countryside!",
  },
  {
    label: "Free parking",
    icon: Parking,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Air conditioning",
    icon: AirCondition,
    description: "This property is on an island!",
  },
  {
    label: " Workspace",
    icon: WorkPlace,
    description: "This property is near a lake!",
  },
  {
    label: "Pool",
    icon: Pool,
    description: "This property has skiing activies!",
  },
  {
    label: "Hot tub",
    icon: HotTub,
    description: "This property is an ancient castle!",
  },
  {
    label: "BBQ grill",
    icon: BBgrill,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Outdoor dinning",
    icon: Outdoor,
    description: "This property offers camping activities!",
  },
  {
    label: "Fire pit",
    icon: FirePit,
    description: "This property is in arctic environment!",
  },
  {
    label: "Pool table ",
    icon: PoolTable,
    description: "This property is in the desert!",
  },
  {
    label: "Exercise room",
    icon: Exercise,
    description: "This property is in a barn!",
  },
  {
    label: "Shower/bath",
    icon: Shower,
    description: "This property is brand new and luxurious!",
  },
];

const Amenities = () => {
  const params = useSearchParams();
  const amenity = params?.get("amenity");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

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
            selected={item.label === amenity}
          />
        ))}
      </div>
    </Container>
  );
};

export default Amenities;
