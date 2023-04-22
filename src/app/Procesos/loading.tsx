import {
  SkeletonActuacion
} from "#@/components/skeleton-actuacion";

import box from "#s/box.module.scss";

import typeface from "##/typeface.module.css";

import {
  poiret
} from "#@/components/typeface";
import CardSkeleton from "../../components/card-skeleton";
import layout from '##/layout.module.css';

export default function Loading (
) {
  return (
    <div className={ layout.procesos }>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
