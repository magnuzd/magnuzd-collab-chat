// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GavelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GavelIcon(props: GavelIconProps) {
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
          "M1.395 21h12v2h-12v-2zm4.24-12.93l2.83-2.83 14.14 14.14-2.83 2.83L5.635 8.07zM12.715 1l5.66 5.66-2.83 2.83-5.66-5.66L12.715 1zm-8.49 8.48l5.66 5.66-2.83 2.83-5.66-5.66 2.83-2.83z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GavelIcon;
/* prettier-ignore-end */
