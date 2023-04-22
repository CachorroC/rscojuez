import Card from "#@/components/card";
import layout from "##/layout.module.css";
import { getProcesoOwn } from "#@/app/Procesos/api/getProcesos";
import { getActuaciones } from "#@/app/Procesos/[llaveProceso]/Actuaciones/api/getActuaciones";
import { Suspense } from "react";
import box from '##/box.module.css';

async function Actuaciones (
  { idProceso }: { idProceso: number; }
) {
  const actuaciones = await getActuaciones(
    idProceso
  );
  return (
    <div className={ layout.actuaciones }>
      {
        actuaciones.map(
          (
            actuacion, index
          ) => (
            <Card key={ index } id={ index.toString(
            ) } content={ actuacion.anotacion } title={ actuacion.actuacion + actuacion.fechaActuacion } href={ "/" } icon={ "home" } />
          )
        )
      }
    </div>
  );
}
export default async function Page (
  {
    params
  }: { params: { llaveProceso: string; }; }
) {
  const proceso = await getProcesoOwn(
    params.llaveProceso
  );

  return (
    <div className={ box.container }>
      <Suspense fallback={ <div>Loading...</div> }>
        <Actuaciones idProceso={ proceso.idProceso } />
      </Suspense>
    </div>
  );
};