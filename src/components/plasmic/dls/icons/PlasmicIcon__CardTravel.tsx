// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CardTravelIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CardTravelIcon(props: CardTravelIconProps) {
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
          "M20 6.5h-3v-2c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2v-11c0-1.11-.89-2-2-2zm-11-2h6v2H9v-2zm11 15H4v-2h16v2zm0-5H4v-6h3v2h2v-2h6v2h2v-2h3v6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CardTravelIcon;
/* prettier-ignore-end */
