// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FreeCancellationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FreeCancellationIcon(props: FreeCancellationIconProps) {
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
          "M10.62 19.75H4.41v-10h14v4.38l2-2V5.75c0-1.1-.9-2-2-2h-1v-2h-2v2h-8v-2h-2v2h-1c-1.11 0-1.99.9-1.99 2l-.01 14a2 2 0 002 2h8.21l-2-2zm-6.21-14h14v2h-14v-2zm11.54 16.5l-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66zm-6.13-8.5l1.59 1.59L10 16.75l-1.59-1.59-1.59 1.59-1.41-1.41L7 13.75l-1.59-1.59 1.41-1.41 1.59 1.59L10 10.75l1.41 1.41-1.59 1.59z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FreeCancellationIcon;
/* prettier-ignore-end */
