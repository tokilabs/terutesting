// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PasswordIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PasswordIcon(props: PasswordIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
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
          "M8.939 10.25a1.852 1.852 0 11-1.852-1.852h.003a1.851 1.851 0 011.849 1.852z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8.942 10.25h6.318v1.852m-2.828 0V10.25"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        clipRule={"evenodd"}
        d={
          "M1 10.25C1 3.313 3.313 1 10.25 1c6.937 0 9.25 2.313 9.25 9.25 0 6.937-2.313 9.25-9.25 9.25C3.313 19.5 1 17.187 1 10.25z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PasswordIcon;
/* prettier-ignore-end */
