import layout from "##/layout.module.css";

import {
  ReactNode
} from "react";

import {
  getProcesoOwn
} from "#@/app/api/procesos/getProcesos";

import Link from "next/link";

export default async function Layout (
  {
    children,
    params,
  }: {
    children: ReactNode;
    params: {
      llaveProceso: string;
    };
  }
) {
  const procesos = await getProcesoOwn(
    params.llaveProceso
  );

  const eachProceso = procesos.map(
    (
      proceso, index
    ) => {
      const idProceso = proceso.idProceso;

      return (
        <div className={ layout.llaveProceso }
          key={ index }>
          <h1>{ proceso.sujetosProcesales }</h1>
          <Link href={ `/Procesos/${ params.llaveProceso }/${ idProceso }` }>
            <p>actuaciones</p>
          </Link>
          <h1>{ `Expediente número: ${ params.llaveProceso }` }</h1>
        </div>
      );
    }
  );


  return ( <>
    <div> {
      eachProceso
    }
    </div>
    <div className={ layout.llaveProceso }>
      { children }
    </div>
  </>
  );
}
