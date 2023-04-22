import layout from "##/layout.module.css";

import Link from "next/link";

import typeface from "##/typeface.module.css";

import searchbar from "##/searchbar.module.css";

import box from "#s/box.module.scss";

import { intProceso } from "#@/app/api/procesos";

export const Procesos = ({
  procesos,
}: {
  procesos: intProceso[];
}) => (
  <div className={box.container}>
    {procesos.map((proceso: intProceso) => (
      <ProcesoCard
        key={proceso.idProceso}
        proceso={proceso}
      />
    ))}
  </div>
);

export const ProcesoCard = ({
  proceso,
}: {
  proceso: intProceso;
}) => {
  const ultimact =
    proceso.fechaUltimaActuacion === null;

  const Icon = (
    <span className="material-symbols-outlined">
      {ultimact ? "lock" : "star"}
    </span>
  );

  return (
    <Link
      href={`/Procesos/${proceso.llaveProceso}/${proceso.idProceso}`}
      className={layout.card}
    >
      <h1 className={searchbar.title}>
        {proceso.sujetosProcesales.toLowerCase()}
      </h1>
      {Icon}
      <i>
        <strong>
          {proceso.fechaUltimaActuacion?.toString()}
        </strong>
      </i>
    </Link>
  );
};
