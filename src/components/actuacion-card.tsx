import layout from "#@/styles/css/layout.module.css";

import typeface from "#@/styles/css/typeface.module.css";

import box from "#@/styles/css/box.module.css";

import {
  poiret 
} from "./typeface";

import card from "#@/styles/css/card.module.css";

import {
  intActuacion 
} from "../app/api/procesos";

export function Actuaciones(
  {
    actuaciones,
  }: {
  actuaciones: intActuacion[];
}
) {
  return (
    <div className={box.grid}>
      {actuaciones.map(
        (
          actuacion: intActuacion
        ) => (
          <ActuacionCard
            key={actuacion.consActuacion}
            actuacion={actuacion}
          />
        )
      )}
    </div>
  );
}

export function ActuacionCard(
  {
    actuacion,
  }: {
  actuacion: intActuacion;
}
) {
  return (
    <div
      className={card.layout}
      key={actuacion.consActuacion}
    >
      <h1 className={card.title}>
        {actuacion.actuacion}
      </h1>
      <p className={card.content}>
        {actuacion.anotacion}
      </p>
      <i>{actuacion.fechaActuacion}</i>
    </div>
  );
}
