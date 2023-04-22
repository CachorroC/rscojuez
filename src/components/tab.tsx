import { Poiret_One } from "next/font/google";

import styles from "##/blog.module.css";

import Link from "next/link";

import box from "##/box.module.css";

import { intProceso } from "../app/api/procesos";

const poiret = Poiret_One({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export default function Tab({
  proceso,
}: {
  proceso: intProceso;
}) {
  const href: string =
    "Procesos/" +
    proceso.llaveProceso +
    "/" +
    proceso.idProceso;

  return (
    <Link
      href={`/Procesos/${proceso.llaveProceso}/${proceso.idProceso}`}
      className={box.flex}
    >
      {proceso.sujetosProcesales}
    </Link>
  );
}
