"use client";

import
{
  useNavigator
} from "./navigator-context";

import React from "react";

import box from "##/box.module.css";

import layout from "#s/layout.module.scss";

import
{
  useSearch
} from "./search-context";

import Link from "next/link";

import
{
  poiret
} from "../components/typeface";

import Card from "#@/components/card";

import
{
  intProceso
} from "./Procesos/procesos";

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
      proceso
    ) => {
      const name = proceso.sujetosProcesales;

      const ultimAct = new Date(
        proceso.fechaUltimaActuacion
          ? proceso.fechaUltimaActuacion
          : ""
      );

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
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
          id={ proceso.idProceso.toString(
          ) }
          content={ month }
          title={ name }
          href={ `/Actuaciones/${ proceso.idProceso }` }
          icon={ "dataset_linked" }
        />
      );
    }
  );

  if ( isOpen === true ) {
    return (
      <div className={ layout.sidenav }>{ rows }</div>
    );
  }
  else if ( !isOpen ) {
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

        <Card
          id={ "2" }
          content={ "" }
          title={ "Procesos" }
          href={ "/Procesos" }
          icon={ "home_storage" }
        />
        <Card
          id={ "3" }
          content={ "" }
          title={ "Bancolombia" }
          href={ "/api/hello" }
          icon={ "account_balance" }
        />
        <Card
          id={ "4" }
          content={ "" }
          title={ "Reintegra" }
          href={ "/api/procesos" }
          icon={ "integration_instructions" }
        />
      </div>
    );
  }

  return (
    <div className={ layout.sidenav }>{ rows }</div>
  );
};

export default NavButton;
