import { getBaseUrl } from '#@/lib/getBaseUrl';
import box from '#@/styles/scss/box.module.scss';
import { Suspense } from 'react';
import { Actuaciones } from '#@/components/actuacion-card';
import { Procesos } from '#@/components/proceso-card';
import card from '#@/styles/css/card.module.css';
import { Search } from '#@/app/context-input-search';
import { fetchActuaciones, getActuaciones } from '#@/app/api/actuaciones/getActuaciones';
import { getProcesos } from '#@/app/api/procesos/getProcesos';
process.env[ 'NODE_TLS_REJECT_UNAUTHORIZED' ] = '0';

export default async function Page ( {
    params
}: {
    params: {

        llaveProceso: string;
        idProceso: number;
    };
} ) {

    const actuacionesData = fetchActuaciones( params.idProceso );

    const procesosData = getProcesos();
    const [
        actuaciones, procesos
    ] = await Promise.all( [

        actuacionesData,
        procesosData,
    ] );


    return (
        <div className={ box.container }>
            <h1 className={ card.title }>{ params.llaveProceso }</h1>
            <Search procesos={ procesos } />
            <Suspense
                fallback={
                    <div className={ box.container }>loading ...</div>
                }>
                <Actuaciones
                    actuaciones={ actuaciones }
                />
            </Suspense>
            <Suspense
                fallback={
                    <div className={ box.container }>loading ...</div>
                }>
                <Procesos procesos={ procesos } />
            </Suspense>
        </div>
    );
}
