// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SouthWestIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SouthWestIcon(props: SouthWestIconProps) {
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
        d={"M14.5 19.5v-2H7.91L19.5 5.91 18.09 4.5 6.5 16.09V9.5h-2v10h10z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SouthWestIcon;
/* prettier-ignore-end */
