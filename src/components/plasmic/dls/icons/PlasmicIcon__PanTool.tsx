// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PanToolIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PanToolIcon(props: PanToolIconProps) {
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
          "M18.37 23.995h-6.55c-1.08 0-2.14-.45-2.89-1.23l-7.3-7.61 2.07-1.83c.62-.55 1.53-.66 2.26-.27l2.41 1.28v-9.55a2.5 2.5 0 013.01-2.45c.09-1.3 1.17-2.33 2.49-2.33.86 0 1.61.43 2.06 1.09.29-.12.61-.18.94-.18a2.5 2.5 0 012.5 2.5v.28a2.5 2.5 0 013 2.45v13.85c0 2.21-1.79 4-4 4zm-13.86-8.72l5.86 6.1c.38.39.9.62 1.44.62h6.56c1.1 0 2-.9 2-2V6.145c0-.28-.22-.5-.5-.5s-.5.22-.5.5v5.85h-2v-8.58c0-.28-.22-.5-.5-.5s-.5.22-.5.5v8.58h-2v-9.49c0-.28-.22-.5-.5-.5s-.5.22-.5.5v9.49h-2v-7.21c0-.28-.22-.5-.5-.5s-.5.23-.5.5v12.87l-5.35-2.83-.51.45z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PanToolIcon;
/* prettier-ignore-end */
