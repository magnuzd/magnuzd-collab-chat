// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SwitchLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SwitchLeftIcon(props: SwitchLeftIconProps) {
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
        d={"M8.5 8.62v6.76L5.12 12 8.5 8.62zM10 5l-7 7 7 7V5zm4 0v14l7-7-7-7z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SwitchLeftIcon;
/* prettier-ignore-end */
