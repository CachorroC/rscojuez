import { getProcesoOwn } from "#@/app/Procesos/api/getProcesos";
import { getActuaciones } from "#@/app/Procesos/[llaveProceso]/Actuaciones/api/getActuaciones";
import { ReactNode } from "react";
import box from '##/box.module.css';
import Card from "../../../components/card";
import layout from '##/layout.module.css';


export default async function Layout (
  { children, params }: { children: ReactNode, params: { llaveProceso: string; }; }
) {
  const proceso = await getProcesoOwn(
    params.llaveProceso
  );

  const actuaciones = await getActuaciones(
    proceso.idProceso
  );
  return (
    <div className={ box.container }>
      <div className={ layout.actuaciones }>
        { actuaciones.map(
          (
            actuacion, index
          ) => {
            const id = actuacion.consActuacion.toString(
            );
            return (
              <Card id={ id } key={ index } content={ actuacion.anotacion } title={ actuacion.actuacion } href={ `/Procesos/${ params.llaveProceso }/Actuaciones/${ proceso.idProceso }` } icon={ "rocket" } />
            );
          }
        ) }
      </div>
      { children }
    </div>
  );
}