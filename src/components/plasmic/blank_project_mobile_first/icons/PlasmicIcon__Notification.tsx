// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NotificationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NotificationIcon(props: NotificationIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 44"}
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
          "M17.378 2C8.14 2 4.126 10.365 4.126 15.895c0 4.133.6 2.916-1.688 7.958-2.794 7.185 8.44 10.121 14.94 10.121 6.498 0 17.733-2.936 14.94-10.12-2.287-5.043-1.688-3.826-1.688-7.96C30.63 10.366 26.615 2 17.378 2z"
        }
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M22.19 39.496c-2.696 3.012-6.902 3.047-9.624 0"}
        stroke={"currentColor"}
        strokeWidth={"3"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NotificationIcon;
/* prettier-ignore-end */
