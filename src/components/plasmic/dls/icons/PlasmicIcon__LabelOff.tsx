// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LabelOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LabelOffIcon(props: LabelOffIconProps) {
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
          "M16 7.19l3.55 5-1.63 2.29 1.43 1.43L22 12.19l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-7.37.01 2 1.99H16zM2 4.22L3.58 5.8c-.36.35-.58.85-.58 1.39v10c0 1.1.9 1.99 2 1.99l11 .01c.28 0 .55-.07.79-.18l2.18 2.18 1.41-1.41L3.41 2.81 2 4.22zm12.97 12.97H5V7.22l9.97 9.97z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LabelOffIcon;
/* prettier-ignore-end */
