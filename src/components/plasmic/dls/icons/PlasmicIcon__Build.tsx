// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildIcon(props: BuildIconProps) {
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
          "M22.656 18.99l-9.08-9.08c.93-2.34.45-5.1-1.44-7-2.3-2.3-5.88-2.51-8.43-.65l3.84 3.85-1.42 1.41-3.83-3.83c-1.86 2.54-1.65 6.13.65 8.42 1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.4-.38.4-1.01 0-1.41zm-3 1.6l-9.46-9.46c-.61.45-1.29.72-2 .82-1.36.2-2.79-.21-3.83-1.25-.95-.94-1.39-2.2-1.32-3.44l3.09 3.09 4.24-4.24-3.09-3.09c1.24-.07 2.49.37 3.44 1.31a4.469 4.469 0 011.24 3.96 4.35 4.35 0 01-.88 1.96l9.45 9.45-.88.89z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BuildIcon;
/* prettier-ignore-end */
