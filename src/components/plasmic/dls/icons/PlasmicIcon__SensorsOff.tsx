// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SensorsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SensorsOffIcon(props: SensorsOffIconProps) {
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
          "M8.445 10.255c-.09.33-.14.68-.14 1.04 0 1.1.45 2.1 1.17 2.83l-1.42 1.42a6.018 6.018 0 01-1.75-4.25c0-.93.21-1.8.58-2.59l-1.47-1.47a7.897 7.897 0 00-1.11 4.06c0 2.21.9 4.21 2.35 5.65l-1.42 1.42a9.969 9.969 0 01-2.93-7.07c0-2.04.61-3.93 1.66-5.51l-2.27-2.27 1.41-1.41 18.38 18.38-1.41 1.41-11.63-11.64zm9.28 3.63c.37-.79.58-1.66.58-2.59 0-1.66-.67-3.16-1.76-4.24l-1.42 1.42a3.951 3.951 0 011.04 3.86l1.56 1.55zm2.58-2.59c0 1.48-.4 2.87-1.11 4.06l1.45 1.45a9.91 9.91 0 001.66-5.51c0-2.76-1.12-5.26-2.93-7.07l-1.42 1.42a7.94 7.94 0 012.35 5.65z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SensorsOffIcon;
/* prettier-ignore-end */
