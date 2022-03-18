// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PendingActionsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PendingActionsIcon(props: PendingActionsIconProps) {
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
          "M16 12.5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L15.5 17.7v-3.2h1v2.79l1.85 1.85-.7.71zM17 3.5h-3.18c-.42-1.16-1.52-2-2.82-2-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h6.11a6.743 6.743 0 01-1.42-2H5v-15h2v3h8v-3h2v5.08c.71.1 1.38.31 2 .6V5.5c0-1.1-.9-2-2-2zm-6 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PendingActionsIcon;
/* prettier-ignore-end */
