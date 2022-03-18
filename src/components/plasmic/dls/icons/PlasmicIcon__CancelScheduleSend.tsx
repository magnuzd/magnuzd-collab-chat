// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CancelScheduleSendIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CancelScheduleSendIcon(props: CancelScheduleSendIconProps) {
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
          "M16 7.5c-.42 0-.83.04-1.24.11L.51 1.5l-.01 7 10.06 1.34c-.42.44-.78.93-1.09 1.46L.5 12.5l.01 7 8.07-3.46c.51 3.65 3.63 6.46 7.42 6.46 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5zM2.5 6.75l.01-2.22 7.51 3.22-7.52-1zm6.1 7.11l-6.1 2.61v-2.22l6.17-.82c-.03.14-.05.28-.07.43zM16 20.5a5.51 5.51 0 01-5.5-5.5c0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.77 12.53L16 14.29l-1.77-1.76-.7.7L15.29 15l-1.76 1.77.7.7L16 15.71l1.77 1.76.7-.7L16.71 15l1.76-1.77-.7-.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CancelScheduleSendIcon;
/* prettier-ignore-end */
