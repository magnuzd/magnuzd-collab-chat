// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VerticalSplitIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VerticalSplitIcon(props: VerticalSplitIconProps) {
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
          "M3 13h8v2H3v-2zm0 4h8v2H3v-2zm0-8h8v2H3V9zm0-4h8v2H3V5zm16 2v10h-4V7h4zm2-2h-8v14h8V5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VerticalSplitIcon;
/* prettier-ignore-end */
