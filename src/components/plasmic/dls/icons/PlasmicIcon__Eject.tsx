// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EjectIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EjectIcon(props: EjectIconProps) {
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
          "M5 17h14v2H5v-2zm7-12L5.33 15h13.34L12 5zm0 3.6l2.93 4.4H9.07L12 8.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EjectIcon;
/* prettier-ignore-end */
