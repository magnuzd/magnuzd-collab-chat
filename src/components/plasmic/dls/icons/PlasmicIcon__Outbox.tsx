// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OutboxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OutboxIcon(props: OutboxIconProps) {
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
        d={"M11 9.83V14h2V9.83l1.59 1.58L16 10l-4-4-4 4 1.41 1.41L11 9.83z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.02c.91 1.21 2.35 2 3.98 2s3.06-.79 3.98-2H19v3zm0-5h-4.18A2.99 2.99 0 0112 16c-1.31 0-2.4-.84-2.82-2H5V5h14v9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OutboxIcon;
/* prettier-ignore-end */
