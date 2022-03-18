// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppsOutageIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppsOutageIcon(props: AppsOutageIconProps) {
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
          "M2 10h4V6H2v4zm6 12h4v-4H8v4zm-6 0h4v-4H2v4zm0-6h4v-4H2v4zm6 0h4v-4H8v4zm6 6h4v-4h-4v4zm3-20c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 8h-1V9h1v1zm0-2h-1V4h1v4zM14 16h4v-2.07c-.33.05-.66.07-1 .07-1.07 0-2.09-.24-3-.68V16zM8 6v4h2.68c-.44-.91-.68-1.93-.68-3 0-.34.02-.67.07-1H8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppsOutageIcon;
/* prettier-ignore-end */
