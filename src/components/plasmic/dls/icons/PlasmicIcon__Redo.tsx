// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RedoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RedoIcon(props: RedoIconProps) {
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
          "M18.63 11.1c-1.85-1.61-4.25-2.6-6.9-2.6-4.65 0-8.58 3.03-9.96 7.22l2.36.78a8.002 8.002 0 017.6-5.5c1.95 0 3.73.72 5.12 1.88l-3.62 3.62h9v-9l-3.6 3.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RedoIcon;
/* prettier-ignore-end */
