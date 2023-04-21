import layout from "#@/styles/css/layout.module.css";

import {
  getProcesosOwn 
} from "#@/app/api/procesos/getProcesos";

import {
  SearchProvider 
} from "#@/app/search-context";

import SearchBar, {
  Search,
} from "#@/lib/context-input-search";

import {
  Item 
} from "../../lib/links";

import box from "#@/styles/scss/box.module.scss";

import {
  llaves 
} from "../../lib/llaves";

export const metadata = {
  title: "Procesos",
};

export default async function Layout(
  {
    children,
  }: {
  children: React.ReactNode;
}
) {
  const procesos = await getProcesosOwn(
  );

  return (
    <div className={layout.body}>{children}</div>
  );
}
