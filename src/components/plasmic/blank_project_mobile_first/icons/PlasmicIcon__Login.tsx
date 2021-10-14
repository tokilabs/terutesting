// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LoginIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LoginIcon(props: LoginIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
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
        d={"M13.543 10.761H1m9.494-3.037l3.05 3.037-3.05 3.038"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5.697 6.083C6.04 2.354 7.437 1 12.988 1c7.397 0 7.397 2.406 7.397 9.635 0 7.23 0 9.636-7.397 9.636-5.552 0-6.948-1.354-7.291-5.084"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LoginIcon;
/* prettier-ignore-end */
