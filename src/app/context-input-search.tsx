'use client';

import React from 'react';
import form from '#@/styles/css/searchbar.module.css';
import { intProceso } from '#@/app/Procesos/procesos';
import navbar from '#@/styles/css/navbar.module.css';
import Link from 'next/link';
import { poiret } from '#@/components/typeface';
import layout from '#s/layout.module.scss';

import Card from '#@/components/card';
import { useSearch } from '#@/app/search-context';
import { useNavigator } from '#@/app/navigator-context';

const SearchBar = (
) => {
  const [
    search,
    setSearch
  ] = useSearch(
  );
  const [
    isOpen,
    setIsOpen
  ] = useNavigator(
  );

  return (
    <form
      className={ layout.SearchBar }
    >
      <input
        type="text"
        className={ form.input }
        value={ search }
        placeholder="Search..."
        onBeforeInput={
          (
          ) => {
            setIsOpen(
              true
            );
          }
        }
        onChange={
          (
            input
          ) => {
            setSearch(
              input.target.value
            );
          }
        }></input>
    </form>
  );
};

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
      proceso, index, array
    ) => {
      if (
        proceso.sujetosProcesales.toLowerCase(
        ).indexOf(
          search.toLowerCase(
          ),
        ) === -1
      ) {
        return;
      }
      rows.push(
        <Card index={ index } array={ array } content={ proceso.fechaUltimaActuacion } title={ proceso.sujetosProcesales } href={ `/Procesos/${ proceso.llaveProceso }` } />,
      );
    }
  );
  return (
    <div className={ layout.procesossearchbox }>{ rows }</div>
  );
};
export default SearchBar;
