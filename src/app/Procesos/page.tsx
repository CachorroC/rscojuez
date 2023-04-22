import {
  getProcesosOwn
} from "#@/app/Procesos/api/getProcesos";
import Card from "#@/components/card";

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
        <Card id={ id } key={ id } content={ proceso.fechaUltimaActuacion } title={ proceso.sujetosProcesales } href={ `/Procesos/${ proceso.llaveProceso }` } icon={ "" } />
      );

    }
  );
}