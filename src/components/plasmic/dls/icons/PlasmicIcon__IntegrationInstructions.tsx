// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IntegrationInstructionsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IntegrationInstructionsIcon(
  props: IntegrationInstructionsIconProps
) {
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
        d={"M12 5.25a.75.75 0 100-1.5.75.75 0 000 1.5z"}
        fill={"currentColor"}
      ></path>

      <path
        d={"M12 5.25a.75.75 0 100-1.5.75.75 0 000 1.5zM5 20h14V6H5v14z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11 15.17L8.83 13 11 10.83 9.59 9.41 6 13l3.59 3.59L11 15.17zm3.41 1.42L18 13l-3.59-3.59L13 10.83 15.17 13 13 15.17l1.41 1.42z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M19 4h-4.18C14.4 2.84 13.3 2 12 2c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 00-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 20H5V6h14v14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IntegrationInstructionsIcon;
/* prettier-ignore-end */
