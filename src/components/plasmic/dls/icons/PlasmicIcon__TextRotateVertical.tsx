// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TextRotateVerticalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TextRotateVerticalIcon(props: TextRotateVerticalIconProps) {
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
          "M16 5h-1.5L9.75 16h2.1l.9-2.2h5l.9 2.2h2.1L16 5zm-2.62 7l1.87-5.02L17.12 12h-3.74zm-7.13 8l3-3h-2V4h-2v13h-2l3 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TextRotateVerticalIcon;
/* prettier-ignore-end */
