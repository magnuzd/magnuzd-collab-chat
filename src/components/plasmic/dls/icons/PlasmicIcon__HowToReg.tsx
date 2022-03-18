// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HowToRegIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HowToRegIcon(props: HowToRegIconProps) {
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
          "M10.5 11.75c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 12c.2-.63 2.57-1.68 4.96-1.94l2.04-2a9.34 9.34 0 00-1-.06c-2.67 0-8 1.34-8 4v2h9l-2-2h-5zm15.6-5.5l-5.13 5.17-2.07-2.08-1.4 1.41 3.47 3.5 6.53-6.59-1.4-1.41z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HowToRegIcon;
/* prettier-ignore-end */
