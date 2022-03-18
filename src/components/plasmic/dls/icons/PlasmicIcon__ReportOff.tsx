// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ReportOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ReportOffIcon(props: ReportOffIconProps) {
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
          "M9.39 4.71h5.8l4.1 4.1v5.8l-.22.22 1.42 1.41.8-.8V7.98l-5.27-5.27H8.56l-.8.8 1.41 1.42.22-.22zm2.9 12a1 1 0 100-2 1 1 0 000 2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.29 9.04V6.71h-2v.33l2 2zM2.7 1.29L1.29 2.7l3.64 3.64-1.64 1.64v7.46l5.27 5.27h7.46l1.64-1.64 3.64 3.64 1.41-1.41L2.7 1.29zm12.49 17.42h-5.8l-4.1-4.1v-5.8l1.05-1.05 9.9 9.9-1.05 1.05z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ReportOffIcon;
/* prettier-ignore-end */
