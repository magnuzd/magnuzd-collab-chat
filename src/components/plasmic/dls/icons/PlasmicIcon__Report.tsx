// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ReportIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ReportIcon(props: ReportIconProps) {
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
          "M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M12 17a1 1 0 100-2 1 1 0 000 2zM11 7h2v7h-2V7z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ReportIcon;
/* prettier-ignore-end */
