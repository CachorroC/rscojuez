import {
  Poiret_One
} from "next/font/google";

import styles from "##/blog.module.css";

import Link from "next/link";

import box from "##/box.module.css";

import {
  intProceso
} from "../app/Procesos/procesos";

const poiret = Poiret_One(
  {
    weight: "400",
    subsets: [
      "latin", "latin-ext"
    ],
    display: "swap",
  }
);

export default function Tab (
  {
    proceso,
  }: {
    proceso: intProceso;
  }
) {
  return (
    <Link
      href={ `/Procesos/${ proceso.llaveProceso }` }
      className={ box.flex }
    >
      { proceso.sujetosProcesales }
    </Link>
  );
}
