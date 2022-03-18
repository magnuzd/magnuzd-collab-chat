// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SouthEastIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SouthEastIcon(props: SouthEastIconProps) {
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
        d={"M19.5 9.5h-2v6.59L5.91 4.5 4.5 5.91 16.09 17.5H9.5v2h10v-10z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SouthEastIcon;
/* prettier-ignore-end */
