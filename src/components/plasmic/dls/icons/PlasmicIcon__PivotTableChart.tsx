// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PivotTableChartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PivotTableChartIcon(props: PivotTableChartIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.5 4.5c0-1.1-.9-2-2-2h-9v5h11v-3zm-18 14c0 1.1.9 2 2 2h3v-11h-5v9zm0-14v3h5v-5h-3c-1.1 0-2 .9-2 2zm15 3.99l-4 4.01 1.41 1.41 1.59-1.6v2.19c0 1.1-.9 2-2 2h-2.17l1.59-1.59-1.42-1.41-4 4 4 4 1.41-1.41-1.58-1.59h2.17c2.21 0 4-1.79 4-4v-2.18l1.59 1.6 1.41-1.42-4-4.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PivotTableChartIcon;
/* prettier-ignore-end */
