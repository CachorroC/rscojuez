import Image from "next/image";

import {
  Poiret_One
} from "next/font/google";

import styles from "##/page.module.css";

import Link from "next/link";

import box from "#s/box.module.scss";

import Form from "#@/components/form";



import layout from "#s/layout.module.scss";
import Card from "../components/card";
import { SkeletonActuacion } from "../components/skeleton-actuacion";

const poiret = Poiret_One(
  {
    weight: "400",
    subsets: [
      "latin", "latin-ext"
    ],
    display: "swap",
  }
);

export default async function Home (
) {
  return (
    <div className={ layout.body }>
      <SkeletonActuacion isLoading={ true } />
    </div>
  );
}
