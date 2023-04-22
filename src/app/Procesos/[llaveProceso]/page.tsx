import { getProcesoOwn } from '#@/app/Procesos/api/getProcesos';
import { getActuaciones } from '#@/app/Procesos/[llaveProceso]/Actuaciones/getActuaciones';

import layout from '##/layout.module.css';
import Card from '#@/components/card';
export default async function Page (
  { params }: { params: { llaveProceso: string; }; }
) {
  const proceso = await getProcesoOwn(
    params.llaveProceso
  );
  const actuaciones = await getActuaciones(
    proceso.idProceso
  );
  return (
    <div className={ layout.llaveProceso }>
      {
        actuaciones.map(
          (
            actuacion, index, array
          ) => ( <Card key={ index } content={ actuacion.anotacion } title={ actuacion.actuacion } href={ `/Procesos/${params.llaveProceso}` } index={ index } array={ array } /> )
        )
      }
    </div>
  );
}