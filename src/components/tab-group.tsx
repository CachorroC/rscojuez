import Tab from '#@/components/tab';
import box from '#@/styles/css/box.module.css';
import { intProceso } from '../app/api/procesos';

export type Item = {
  text: string;
  idProceso?: string;
  segment?: string;
};

export const TabGroup = ( {
    path,
    items,
}: {
  path: string;
  items: intProceso[];
} ) => (
    <div className={ box.grid }>
        { ' ' }
        { items.map( ( item ) => (
            <Tab
                proceso={ item }
                key={ item.idProceso }
            />
        ) ) }
    </div>
);
