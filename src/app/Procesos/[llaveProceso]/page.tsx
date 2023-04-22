import { getProcesoOwn } from '#@/app/Procesos/api/getProcesos';
import { getActuaciones } from '#@/app/Procesos/[llaveProceso]/Actuaciones/api/getActuaciones';

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
            actuacion, index
          ) => ( <Card id={ actuacion.consActuacion.toString(
          ) } key={ index } content={ actuacion.anotacion } title={ actuacion.actuacion } href={ '/' } icon={ 'star' } /> )
        )
      }
    </div>
  );
}