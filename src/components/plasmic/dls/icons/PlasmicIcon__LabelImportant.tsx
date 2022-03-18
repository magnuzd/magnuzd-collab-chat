// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LabelImportantIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LabelImportantIcon(props: LabelImportantIconProps) {
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
          "M3.5 18.995h11c.67 0 1.27-.32 1.63-.83l4.37-6.16-4.37-6.16c-.36-.51-.96-.84-1.63-.84h-11l5 7-5 6.99z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LabelImportantIcon;
/* prettier-ignore-end */
