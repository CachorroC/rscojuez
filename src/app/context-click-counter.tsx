"use client";

import {
  useNavigator
} from "#@/app/navigator-context";

import React from "react";

import box from "##/box.module.css";

import layout from "#s/layout.module.scss";

import {
  useSearch
} from "#@/app/search-context";

import Link from "next/link";


import Card from "#@/components/card";

import {
  intProceso
} from "#@/app/Procesos/procesos";
import CardSkeleton from "#@/components/card-skeleton";

const NavButton = (
) => {
  const [
    isOpen, setIsOpen
  ] = useNavigator(
  );

  if ( isOpen ) {
    return (
      <button
        onClick={ (
        ) => setIsOpen(
          false
        ) }
        className={ layout.NavButton }
      >
        <span className="material-symbols-outlined">
          close
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={ (
      ) => setIsOpen(
        true
      ) }
      className={ layout.NavButton }
    >
      <span className="material-symbols-outlined">
        menu
      </span>
    </button>
  );
};

export const Nav = (
  {
    procesos,
  }: {
    procesos: intProceso[];
  }
) => {
  const [
    isOpen, setIsOpen
  ] = useNavigator(
  );

  const [ search ] = useSearch(
  );

  const rows: any[] = [];

  procesos.forEach(
    (
      proceso, index, array
    ) => {
      const name = proceso.sujetosProcesales;

      const ultimAct = new Date(
        proceso.fechaUltimaActuacion
          ? proceso.fechaUltimaActuacion
          : ""
      );

      const months = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Junio",
        "Julio",
        "Ago",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];

      const month = months[ ultimAct.getMonth(
      ) ];

      if (
        proceso.sujetosProcesales
          .toLowerCase(
          )
          .indexOf(
            search.toLowerCase(
            )
          ) === -1
      ) {
        return;
      }

      rows.push(
        <Card

          content={ month }
          title={ name }
          href={ `/Procesos/${ proceso.llaveProceso }` }
          icon={ "dataset_linked" } index={ index } array={ array } />
      );
    }
  );

  if ( isOpen === true ) {
    return (
      <div className={ layout.sidenav }>{ rows }</div>
    );
  }
  if ( !isOpen ) {
    return (
      <div className={ layout.sidenav }>
        <button
          onClick={ (
          ) => {
            setIsOpen(
              true
            );
          } }
        >
          <span className="material-symbols-outlined">
            heart_plus
          </span>
        </button>

        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }

  return (
    <div className={ layout.sidenav }>{ rows }</div>
  );
};

export default NavButton;
