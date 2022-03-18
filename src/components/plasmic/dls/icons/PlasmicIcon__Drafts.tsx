// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DraftsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DraftsIcon(props: DraftsIconProps) {
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
          "M21.99 9.5c0-.72-.37-1.35-.94-1.7L12 2.5 2.95 7.8c-.57.35-.95.98-.95 1.7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zm-2 0v.01L12 14.5l-8-5 8-4.68 7.99 4.68zM4 19.5v-7.66l8 5.02 7.99-4.99.01 7.63H4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DraftsIcon;
/* prettier-ignore-end */
