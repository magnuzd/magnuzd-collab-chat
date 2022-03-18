// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShopIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShopIcon(props: ShopIconProps) {
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
          "M16 6.5v-2c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2v-13h-6zm-6-2h4v2h-4v-2zm10 15H4v-11h16v11zm-11-1l7.5-5-7.5-4v9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ShopIcon;
/* prettier-ignore-end */
