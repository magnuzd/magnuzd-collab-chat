// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SubtitlesOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SubtitlesOffIcon(props: SubtitlesOffIconProps) {
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
          "M20.48 3.295H7.31l2 2h11.17v11.17l1.76 1.76c.15-.28.24-.59.24-.93v-12c0-1.1-.9-2-2-2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M18.48 9.295h-5.17l2 2h3.17v-2zM1.52 3.165l1.2 1.2c-.15.28-.24.59-.24.93v12c0 1.1.9 2 2 2h13.17l2.96 2.96 1.41-1.41-19.09-19.1-1.41 1.42zm2.96 2.96l3.17 3.17H6.48v2h2v-1.17l3.17 3.17H6.48v2h7.17l2 2H4.48V6.125z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SubtitlesOffIcon;
/* prettier-ignore-end */
