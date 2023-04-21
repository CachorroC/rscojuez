import Card from "../../components/card";
import { getProcesos } from "../api/procesos/getProcesos";
import box from '#@/styles/css/box.module.css';

/*  */export default async function Page () {
    const procesos = await getProcesos();
    return (
        <div className="prose prose-sm prose-invert max-w-none">
            <h1 className="text-xl font-bold">Client Context</h1>
            <div className={ box.container }>
                {
                    procesos.map(
                        ( proceso ) => (
                            <Card id={ proceso.idProceso.toString() } key={ proceso.idProceso } content={ proceso.fechaUltimaActuacion ? proceso.fechaUltimaActuacion : JSON.stringify( proceso ) } title={ proceso.sujetosProcesales } href={ `/Procesos/${ proceso.llaveProceso }` } icon={ 'book' } />
                        )
                    )
                }
            </div>

            <ul>
                <li>
                    This example uses context to share state between
                    Client Components that cross the Server/Client
                    Component boundary.
                </li>
                <li>
                    Try incrementing the counter and navigating
                    between pages. Note how the counter state is
                    shared across the app even though they are inside
                    different layouts and pages that are Server
                    Components.
                </li>
            </ul>
        </div>
    );
}
