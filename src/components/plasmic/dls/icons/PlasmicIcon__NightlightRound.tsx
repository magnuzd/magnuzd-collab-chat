// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NightlightRoundIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NightlightRoundIcon(props: NightlightRoundIconProps) {
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
          "M15.5 22c1.05 0 2.05-.16 3-.46-4.06-1.27-7-5.06-7-9.54 0-4.48 2.94-8.27 7-9.54-.95-.3-1.95-.46-3-.46-5.52 0-10 4.48-10 10s4.48 10 10 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NightlightRoundIcon;
/* prettier-ignore-end */
