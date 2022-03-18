// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SpellcheckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SpellcheckIcon(props: SpellcheckIconProps) {
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
          "M11.72 15.25h2.09l-5.11-13H6.84l-5.11 13h2.09l1.12-3h5.64l1.14 3zm-6.02-5l2.07-5.52 2.07 5.52H5.7zm15.16.59l-8.09 8.09-3.67-3.68-1.41 1.41 5.09 5.09 9.49-9.5-1.41-1.41z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SpellcheckIcon;
/* prettier-ignore-end */
