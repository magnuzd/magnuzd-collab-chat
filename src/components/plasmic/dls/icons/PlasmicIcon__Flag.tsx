// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlagIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlagIcon(props: FlagIconProps) {
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
          "M11.86 5.5l.4 2h5.24v6h-3.36l-.4-2H6.5v-6h5.36zm1.64-2h-9v17h2v-7h5.6l.4 2h7v-10h-5.6l-.4-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FlagIcon;
/* prettier-ignore-end */
