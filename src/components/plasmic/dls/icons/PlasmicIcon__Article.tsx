// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArticleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArticleIcon(props: ArticleIconProps) {
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
          "M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArticleIcon;
/* prettier-ignore-end */
