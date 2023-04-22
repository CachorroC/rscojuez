import typeface from "##/typeface.module.css";

import Link from "next/link";

import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

import box from "##/box.module.css";

import {
  poiret
} from "./typeface";

import card from "##/card.module.css";

import {
  Route
} from "next";
import { intActuacion, intProceso } from "../app/Procesos/procesos";

export default function Card<T extends string> (
  {
    index,
    array,
    content,
    title,
    href,
    icon,
  }: {
    index: number;
    array: string[] | intActuacion[] | intProceso[] | any[];
    content: string | null | undefined;
    title: string;
    href?: Route<T> | URL;
    icon?: string;
  }
) {
  const hasContent = (
  ) => {
    if ( content === null ) {
      return "no hay contenido";

    }
    if ( content === undefined ) {
      return "no se ha definido el contenido";

    }

    return content;

  };
  return (
    <div
      className={ card.layout }
    >
      <h4 className={ card.title }>{ title }</h4>
      <p className={ card.content }>{ hasContent(
      ) }</p>
      <sub className={ card.sub }>
        { `${ index } de ${ array.length }` }
      </sub>

      { href ? <Link
        href={ href }
        className={ card.link }
      >
        <span className="material-symbols-outlined">
          { icon
            ? icon
            : "star" }
        </span>
      </Link> : <hr className={ card.dummytxt }}
    </div>
  );
}
