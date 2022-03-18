// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type QuickreplyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function QuickreplyIcon(props: QuickreplyIconProps) {
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
          "M3.75 16.67V3.5h16v6h2v-6c0-1.1-.9-2-2-2h-16c-1.1 0-1.99.9-1.99 2l-.01 18 4-4h9v-2H4.92l-1.17 1.17z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M22.25 15.5h-2.2l1.7-4h-5v6h2v5l3.5-7z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default QuickreplyIcon;
/* prettier-ignore-end */
