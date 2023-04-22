"use client";

import
{
  useSearch
} from "../app/search-context";

import React from "react";

import form from "##/searchbar.module.css";

import navbar from "##/navbar.module.css";

import Link from "next/link";

import
{
  poiret
} from "#@/components/typeface";

import layout from "#s/layout.module.scss";

import
{
  useNavigator
} from "../app/navigator-context";

import Card from "#@/components/card";

import
{
  intProceso
} from "../app/Procesos/procesos";

const SearchBar = (
) => {
  const [
    search, setSearch
  ] = useSearch(
  );

  const [
    isOpen, setIsOpen
  ] = useNavigator(
  );

  return (
    <form className={ layout.SearchBar }>
      <input
        type="text"
        className={ form.input }
        value={ search }
        placeholder="Search..."
        onBeforeInput={ (
        ) => {
          setIsOpen(
            true
          );
        } }
        onChange={ (
          input
        ) => {
          setSearch(
            input.target.value
          );
        } }
      ></input>
    </form>
  );
};

function ProcesoRow (
  {
    proceso,
  }: {
    proceso: intProceso;
  }
) {
  const name = proceso.sujetosProcesales
    .slice(
      0,
      10
    )
    .toLocaleLowerCase(
    );

  const ultimAct = new Date(
    proceso.fechaUltimaActuacion
      ? proceso.fechaUltimaActuacion
      : ""
  );

  return (
    <Card
      id={ proceso.idProceso.toString(
      ) }
      content={ ultimAct
        .toLocaleString(
        )
        .slice(
          0,
          9
        ) }
      title={
        proceso.sujetosProcesales
          .toLowerCase(
          )
          .split(
            " "
          )[ 0 ] +
        " " +
        proceso.sujetosProcesales
          .toLowerCase(
          )
          .split(
            " "
          )[ 2 ]
      }
      href={ `/Procesos/${ proceso.llaveProceso }` }
      icon={ "heart_plus" }
    />
  );
}

export const Search = (
  {
    procesos,
  }: {
    procesos: intProceso[];
  }
) => {
  const [ search ] = useSearch(
  );

  const rows: any[] = [];

  procesos.forEach(
    (
      proceso
    ) => {
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
        <ProcesoRow
          proceso={ proceso }
          key={ proceso.sujetosProcesales }
        />
      );
    }
  );

  return (
    <div className={ layout.procesossearchbox }>
      { rows }
    </div>
  );
};

export default SearchBar;
