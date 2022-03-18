// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SendIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SendIcon(props: SendIconProps) {
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
          "M3.51 6.03l7.51 3.22-7.52-1 .01-2.22zm7.5 8.72L3.5 17.97v-2.22l7.51-1zM1.51 3l-.01 7 15 2-15 2 .01 7 20.99-9L1.51 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SendIcon;
/* prettier-ignore-end */
