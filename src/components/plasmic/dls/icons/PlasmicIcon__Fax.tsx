// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaxIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaxIcon(props: FaxIconProps) {
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
          "M19 8.5h-1v-5H8v5h-.78c-.55-.61-1.33-1-2.22-1-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3 .89 0 1.67-.39 2.22-1H22v-8c0-1.66-1.34-3-3-3zm-13 9c0 .55-.45 1-1 1s-1-.45-1-1v-7c0-.55.45-1 1-1s1 .45 1 1v7zm4-12h6v3h-6v-3zm10 12H8v-7h11c.55 0 1 .45 1 1v6z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15 13.5a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-3 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-5-5H9v5h4v-5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FaxIcon;
/* prettier-ignore-end */
