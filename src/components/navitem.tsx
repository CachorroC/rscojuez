"use client";

import Link from "next/link";

import styles from "##/navbar.module.css";

import {} from "#@/lib/links";

import { useSelectedLayoutSegment } from "next/navigation";

import "material-symbols";

import box from "##/box.module.css";

import { Route } from "next";

import navbar from "#s/navbar.module.scss";

export default function NavItem<
  X extends string
>({
  icon,
  name,
  href,
  close,
}: {
  icon: string;
  name: string;
  href: Route<X> | URL;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();

  const isActive = href === segment;

  return (
    <Link
      onClick={close}
      href={href}
      className={navbar.link}
    >
      {icon && (
        <span className="material-symbols-outlined">
          {icon}
        </span>
      )}
      <p className={navbar.title}>{name}</p>
    </Link>
  );
}
