// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BiotechIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BiotechIcon(props: BiotechIconProps) {
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
          "M7 19.5c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3a3 3 0 011.47-2.57c.41.59 1.06 1 1.83 1.06.7.06 1.36-.19 1.85-.62l.59 1.61.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.52-.94.34-.34-.94-1.88.68.34.94-.94.35.56 1.55c-1.17-.04-2.19.75-2.48 1.86A5.01 5.01 0 005 12.5c0 2.76 2.24 5 5 5v2H7zm5.86-14.48l1.71 4.7-.94.34-1.71-4.7.94-.34zM10.5 7.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BiotechIcon;
/* prettier-ignore-end */
