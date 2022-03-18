// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VisibilityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VisibilityIcon(props: VisibilityIconProps) {
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
          "M12 6.5a9.77 9.77 0 018.82 5.5A9.77 9.77 0 0112 17.5 9.77 9.77 0 013.18 12 9.77 9.77 0 0112 6.5zm0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5zm0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VisibilityIcon;
/* prettier-ignore-end */
