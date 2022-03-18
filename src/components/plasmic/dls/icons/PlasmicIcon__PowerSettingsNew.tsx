// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PowerSettingsNewIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PowerSettingsNewIcon(props: PowerSettingsNewIconProps) {
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
          "M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42A6.92 6.92 0 0119 12c0 3.87-3.13 7-7 7A6.995 6.995 0 017.58 6.58L6.17 5.17A8.932 8.932 0 003 12a9 9 0 0018 0c0-2.74-1.23-5.18-3.17-6.83z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PowerSettingsNewIcon;
/* prettier-ignore-end */
