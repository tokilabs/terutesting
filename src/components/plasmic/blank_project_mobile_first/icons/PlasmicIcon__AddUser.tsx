// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AddUserIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AddUserIcon(props: AddUserIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 23"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={"evenodd"}
        d={
          "M8.367 21.477c-3.973 0-7.367-.6-7.367-3.007 0-2.406 3.372-4.595 7.367-4.595 3.973 0 7.366 2.168 7.366 4.573 0 2.405-3.372 3.03-7.366 3.03zm0-11.033a4.723 4.723 0 10-4.722-4.722 4.706 4.706 0 004.688 4.722h.034z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M17.96 7.228v4.177m2.13-2.088h-4.26"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AddUserIcon;
/* prettier-ignore-end */
