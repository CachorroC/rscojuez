import clsx from "clsx";

import typeface from "##/typeface.module.css";

import layout from "##/layout.module.css";

import box from "#s/box.module.scss";

import {
  poiret
} from "./typeface";

import card from "##/card.module.css";

export const SkeletonActuacion = (
  {
    isLoading,
  }: {
    isLoading?: boolean;
  }
) => {
  if ( isLoading ) {
    return (
      <div className={ box.container }>
        <div className={ layout.card }>
          <h1 className={ poiret.className }>
            Cargando
          </h1>
          <hr className={ card.dummytxt }></hr>
        </div>
      </div>
    );
  }

  return <></>;
};
