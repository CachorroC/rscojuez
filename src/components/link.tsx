import {
  Route
} from "next";

import Link from "next/link";

import navbar from "#s/navbar.module.scss";

import {
  useNavigator
} from "../app/navigator-context";

export default function NavLink<Y extends string> (
  title: string,
  href: Route<Y> | URL,
  icon?: string
) {
  const [
    isOpen, setIsOpen
  ] = useNavigator(
  );

  return (
    <Link
      onClick={ (
      ) => setIsOpen(
        false
      ) }
      href={ href }
      className={ navbar.link }
    >
      <h1 className={ navbar.title }>{ title }</h1>
      { icon && (
        <span className="material-symbols-outlined">
          { icon }
        </span>
      ) }
    </Link>
  );
}
