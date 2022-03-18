// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MapsHomeWorkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MapsHomeWorkIcon(props: MapsHomeWorkIconProps) {
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
          "M19 7h-2v2h2V7zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2zM1 11v10h6v-5h2v5h6V11L8 6l-7 5zm12 8h-2v-5H5v5H3v-7l5-3.5 5 3.5v7z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M10 3v1.97l2 1.43V5h9v14h-4v2h6V3H10z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MapsHomeWorkIcon;
/* prettier-ignore-end */
