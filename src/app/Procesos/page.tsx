import {
  getProcesosOwn
} from "#@/app/Procesos/api/getProcesos";
import Card from "#@/components/card";
import layout from '##/layout.module.css';

export default async function Page (
) {
  const procesos = await getProcesosOwn(
  );

  const Proceso = procesos.map(
    (
      proceso, index, array
    ) => {
      const id = ( proceso.idProceso + index ).toString(
      );
      return (
        <Card key={ index } content={ proceso.fechaUltimaActuacion } title={ proceso.sujetosProcesales } index={ index } array={ array } href={ "/Procesos" } />
      );

    }
  );
  return (
    <div className={ layout.procesos }>
      { Proceso }
    </div>
  );
}