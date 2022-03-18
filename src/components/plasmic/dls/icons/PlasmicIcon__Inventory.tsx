// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InventoryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InventoryIcon(props: InventoryIconProps) {
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
          "M4.25 6h2v3h10V6h2v5h2V6c0-1.1-.9-2-2-2h-4.18c-.42-1.16-1.52-2-2.82-2-1.3 0-2.4.84-2.82 2H4.25c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2h-6V6zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M20.25 12.5L14.76 18l-3.01-3-1.5 1.5 4.51 4.5 6.99-7-1.5-1.5z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InventoryIcon;
/* prettier-ignore-end */
