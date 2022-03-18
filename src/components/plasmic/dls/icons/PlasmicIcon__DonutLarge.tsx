// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DonutLargeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DonutLargeIcon(props: DonutLargeIconProps) {
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
          "M13.025 5.08a7 7 0 015.92 5.92h3.03c-.47-4.72-4.23-8.48-8.95-8.95v3.03zm5.92 7.92a7 7 0 01-5.92 5.92v3.03c4.72-.47 8.48-4.23 8.95-8.95h-3.03zm-7.92 5.92c-3.39-.49-6-3.4-6-6.92s2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95 0 5.19 3.95 9.45 9 9.95v-3.03z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DonutLargeIcon;
/* prettier-ignore-end */
