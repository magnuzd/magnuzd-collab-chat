// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TextRotationAngleupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TextRotationAngleupIcon(props: TextRotationAngleupIconProps) {
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
          "M16.51 8.38l1.41 1.41-9.19 9.19 1.41 1.41 9.19-9.19 1.42 1.42V8.38h-4.24zm-8.28 3.75l3.54-3.54 2.19.92 1.48-1.48L4.31 3.61 3.25 4.67l4.42 11.14 1.48-1.48-.92-2.2zm-.82-1.72L5.18 5.54l4.87 2.23-2.64 2.64z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TextRotationAngleupIcon;
/* prettier-ignore-end */
