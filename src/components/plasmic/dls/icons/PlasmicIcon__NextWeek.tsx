// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NextWeekIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NextWeekIcon(props: NextWeekIconProps) {
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
          "M11 18l4-4-4-4-1 1 3 3-3 3 1 1zm9-11.5h-4v-2c0-.55-.22-1.05-.59-1.41-.36-.37-.86-.59-1.41-.59h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2zm-10-2h4v2h-4v-2zm10 15H4v-11h16v11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NextWeekIcon;
/* prettier-ignore-end */
