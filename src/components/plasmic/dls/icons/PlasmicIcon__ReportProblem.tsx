// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ReportProblemIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ReportProblemIcon(props: ReportProblemIconProps) {
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
          "M12 6.49l7.53 13.01H4.47L12 6.49zm0-3.99l-11 19h22l-11-19zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ReportProblemIcon;
/* prettier-ignore-end */
