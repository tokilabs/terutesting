// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i13eimJzTqVDJ7txL3iZyA
// Component: 3SUJutzDay
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: i13eimJzTqVDJ7txL3iZyA/projectcss
import * as sty from "./PlasmicSettingsScreen.module.css"; // plasmic-import: 3SUJutzDay/css

import ArrowLeftCircleIcon from "./icons/PlasmicIcon__ArrowLeftCircle"; // plasmic-import: f8fRLo_gvW/icon
import Setting2Icon from "./icons/PlasmicIcon__Setting2"; // plasmic-import: aworLWs9JV/icon
import AddUserIcon from "./icons/PlasmicIcon__AddUser"; // plasmic-import: cU6YRA-495/icon
import Password2Icon from "./icons/PlasmicIcon__Password2"; // plasmic-import: zV0aIE_DJQu/icon
import ArrowDownCircleIcon from "./icons/PlasmicIcon__ArrowDownCircle"; // plasmic-import: vf27hFmwoQc/icon
import LogoutIcon from "./icons/PlasmicIcon__Logout"; // plasmic-import: j6GIHb6h9Cp/icon

export type PlasmicSettingsScreen__VariantMembers = {};

export type PlasmicSettingsScreen__VariantsArgs = {};
type VariantPropType = keyof PlasmicSettingsScreen__VariantsArgs;
export const PlasmicSettingsScreen__VariantProps = new Array<VariantPropType>();

export type PlasmicSettingsScreen__ArgsType = {};
type ArgPropType = keyof PlasmicSettingsScreen__ArgsType;
export const PlasmicSettingsScreen__ArgProps = new Array<ArgPropType>();

export type PlasmicSettingsScreen__OverridesType = {
  root?: p.Flex<"div">;
  patientAppConfig?: p.Flex<"div">;
  appBar?: p.Flex<"div">;
  arrowLeftCircle?: p.Flex<"div">;
  headLine?: p.Flex<"div">;
  h1Headline?: p.Flex<"div">;
  settings?: p.Flex<"div">;
  frame?: p.Flex<"div">;
  buttom?: p.Flex<"div">;
  buttomText?: p.Flex<"div">;
  twoTone?: p.Flex<"div">;
  addUser?: p.Flex<"div">;
  buttom2?: p.Flex<"div">;
  buttomText2?: p.Flex<"div">;
  twoTone2?: p.Flex<"div">;
  password?: p.Flex<"div">;
  iconlyCurvedPassword?: p.Flex<"div">;
  rectangle?: p.Flex<"div">;
  buttom3?: p.Flex<"div">;
  buttomText3?: p.Flex<"div">;
  twoTone3?: p.Flex<"div">;
  arrowDownCircle?: p.Flex<"div">;
  rectangle2?: p.Flex<"div">;
  buttom4?: p.Flex<"div">;
  buttomText4?: p.Flex<"div">;
  twoTone4?: p.Flex<"div">;
  logout?: p.Flex<"div">;
};

export interface DefaultSettingsScreenProps {
  className?: string;
}

function PlasmicSettingsScreen__RenderFunc(props: {
  variants: PlasmicSettingsScreen__VariantsArgs;
  args: PlasmicSettingsScreen__ArgsType;
  overrides: PlasmicSettingsScreen__OverridesType;
  dataFetches?: PlasmicSettingsScreen__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      {}
      {}

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"patientAppConfig"}
            data-plasmic-override={overrides.patientAppConfig}
            className={classNames(defaultcss.all, sty.patientAppConfig)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"appBar"}
              data-plasmic-override={overrides.appBar}
              hasGap={true}
              className={classNames(defaultcss.all, sty.appBar)}
            >
              <div
                data-plasmic-name={"arrowLeftCircle"}
                data-plasmic-override={overrides.arrowLeftCircle}
                className={classNames(defaultcss.all, sty.arrowLeftCircle)}
              >
                <ArrowLeftCircleIcon
                  className={classNames(defaultcss.all, sty.svg__obw30)}
                  role={"img"}
                />
              </div>

              <p.Stack
                as={"div"}
                data-plasmic-name={"headLine"}
                data-plasmic-override={overrides.headLine}
                hasGap={true}
                className={classNames(defaultcss.all, sty.headLine)}
              >
                <div
                  data-plasmic-name={"h1Headline"}
                  data-plasmic-override={overrides.h1Headline}
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.h1Headline
                  )}
                >
                  {"Settings"}
                </div>
              </p.Stack>

              {false ? (
                <div
                  data-plasmic-name={"settings"}
                  data-plasmic-override={overrides.settings}
                  className={classNames(defaultcss.all, sty.settings)}
                >
                  <Setting2Icon
                    className={classNames(defaultcss.all, sty.svg__q0REy)}
                    role={"img"}
                  />
                </div>
              ) : null}
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"frame"}
              data-plasmic-override={overrides.frame}
              hasGap={true}
              className={classNames(defaultcss.all, sty.frame)}
            >
              {false ? (
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"buttom"}
                  data-plasmic-override={overrides.buttom}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.buttom)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"buttomText"}
                    data-plasmic-override={overrides.buttomText}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.buttomText)}
                  >
                    <div
                      data-plasmic-name={"twoTone"}
                      data-plasmic-override={overrides.twoTone}
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.twoTone
                      )}
                    >
                      {"Link  therapist"}
                    </div>
                  </p.Stack>

                  <div
                    data-plasmic-name={"addUser"}
                    data-plasmic-override={overrides.addUser}
                    className={classNames(defaultcss.all, sty.addUser)}
                  >
                    <AddUserIcon
                      className={classNames(defaultcss.all, sty.svg__nC8AC)}
                      role={"img"}
                    />
                  </div>
                </p.Stack>
              ) : null}

              <p.Stack
                as={"div"}
                data-plasmic-name={"buttom2"}
                data-plasmic-override={overrides.buttom2}
                hasGap={true}
                className={classNames(defaultcss.all, sty.buttom2)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"buttomText2"}
                  data-plasmic-override={overrides.buttomText2}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.buttomText2)}
                >
                  <div
                    data-plasmic-name={"twoTone2"}
                    data-plasmic-override={overrides.twoTone2}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.twoTone2
                    )}
                  >
                    {"change password"}
                  </div>
                </p.Stack>

                <div
                  data-plasmic-name={"password"}
                  data-plasmic-override={overrides.password}
                  className={classNames(defaultcss.all, sty.password)}
                >
                  <div
                    data-plasmic-name={"iconlyCurvedPassword"}
                    data-plasmic-override={overrides.iconlyCurvedPassword}
                    className={classNames(
                      defaultcss.all,
                      sty.iconlyCurvedPassword
                    )}
                  >
                    <Password2Icon
                      className={classNames(defaultcss.all, sty.svg__zv3Jf)}
                      role={"img"}
                    />
                  </div>
                </div>
              </p.Stack>

              <div
                data-plasmic-name={"rectangle"}
                data-plasmic-override={overrides.rectangle}
                className={classNames(defaultcss.all, sty.rectangle)}
              />

              <p.Stack
                as={"div"}
                data-plasmic-name={"buttom3"}
                data-plasmic-override={overrides.buttom3}
                hasGap={true}
                className={classNames(defaultcss.all, sty.buttom3)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"buttomText3"}
                  data-plasmic-override={overrides.buttomText3}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.buttomText3)}
                >
                  <div
                    data-plasmic-name={"twoTone3"}
                    data-plasmic-override={overrides.twoTone3}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.twoTone3
                    )}
                  >
                    {"change Language"}
                  </div>
                </p.Stack>

                <div
                  data-plasmic-name={"arrowDownCircle"}
                  data-plasmic-override={overrides.arrowDownCircle}
                  className={classNames(defaultcss.all, sty.arrowDownCircle)}
                >
                  <ArrowDownCircleIcon
                    className={classNames(defaultcss.all, sty.svg___7BUvt)}
                    role={"img"}
                  />
                </div>
              </p.Stack>

              <div
                data-plasmic-name={"rectangle2"}
                data-plasmic-override={overrides.rectangle2}
                className={classNames(defaultcss.all, sty.rectangle2)}
              />

              <p.Stack
                as={"div"}
                data-plasmic-name={"buttom4"}
                data-plasmic-override={overrides.buttom4}
                hasGap={true}
                className={classNames(defaultcss.all, sty.buttom4)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"buttomText4"}
                  data-plasmic-override={overrides.buttomText4}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.buttomText4)}
                >
                  <div
                    data-plasmic-name={"twoTone4"}
                    data-plasmic-override={overrides.twoTone4}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.twoTone4
                    )}
                  >
                    {"Logout"}
                  </div>
                </p.Stack>

                <div
                  data-plasmic-name={"logout"}
                  data-plasmic-override={overrides.logout}
                  className={classNames(defaultcss.all, sty.logout)}
                >
                  <LogoutIcon
                    className={classNames(defaultcss.all, sty.svg___3EEp5)}
                    role={"img"}
                  />
                </div>
              </p.Stack>
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "patientAppConfig",
    "appBar",
    "arrowLeftCircle",
    "headLine",
    "h1Headline",
    "settings",
    "frame",
    "buttom",
    "buttomText",
    "twoTone",
    "addUser",
    "buttom2",
    "buttomText2",
    "twoTone2",
    "password",
    "iconlyCurvedPassword",
    "rectangle",
    "buttom3",
    "buttomText3",
    "twoTone3",
    "arrowDownCircle",
    "rectangle2",
    "buttom4",
    "buttomText4",
    "twoTone4",
    "logout"
  ],
  patientAppConfig: [
    "patientAppConfig",
    "appBar",
    "arrowLeftCircle",
    "headLine",
    "h1Headline",
    "settings",
    "frame",
    "buttom",
    "buttomText",
    "twoTone",
    "addUser",
    "buttom2",
    "buttomText2",
    "twoTone2",
    "password",
    "iconlyCurvedPassword",
    "rectangle",
    "buttom3",
    "buttomText3",
    "twoTone3",
    "arrowDownCircle",
    "rectangle2",
    "buttom4",
    "buttomText4",
    "twoTone4",
    "logout"
  ],
  appBar: ["appBar", "arrowLeftCircle", "headLine", "h1Headline", "settings"],
  arrowLeftCircle: ["arrowLeftCircle"],
  headLine: ["headLine", "h1Headline"],
  h1Headline: ["h1Headline"],
  settings: ["settings"],
  frame: [
    "frame",
    "buttom",
    "buttomText",
    "twoTone",
    "addUser",
    "buttom2",
    "buttomText2",
    "twoTone2",
    "password",
    "iconlyCurvedPassword",
    "rectangle",
    "buttom3",
    "buttomText3",
    "twoTone3",
    "arrowDownCircle",
    "rectangle2",
    "buttom4",
    "buttomText4",
    "twoTone4",
    "logout"
  ],
  buttom: ["buttom", "buttomText", "twoTone", "addUser"],
  buttomText: ["buttomText", "twoTone"],
  twoTone: ["twoTone"],
  addUser: ["addUser"],
  buttom2: [
    "buttom2",
    "buttomText2",
    "twoTone2",
    "password",
    "iconlyCurvedPassword"
  ],
  buttomText2: ["buttomText2", "twoTone2"],
  twoTone2: ["twoTone2"],
  password: ["password", "iconlyCurvedPassword"],
  iconlyCurvedPassword: ["iconlyCurvedPassword"],
  rectangle: ["rectangle"],
  buttom3: ["buttom3", "buttomText3", "twoTone3", "arrowDownCircle"],
  buttomText3: ["buttomText3", "twoTone3"],
  twoTone3: ["twoTone3"],
  arrowDownCircle: ["arrowDownCircle"],
  rectangle2: ["rectangle2"],
  buttom4: ["buttom4", "buttomText4", "twoTone4", "logout"],
  buttomText4: ["buttomText4", "twoTone4"],
  twoTone4: ["twoTone4"],
  logout: ["logout"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  patientAppConfig: "div";
  appBar: "div";
  arrowLeftCircle: "div";
  headLine: "div";
  h1Headline: "div";
  settings: "div";
  frame: "div";
  buttom: "div";
  buttomText: "div";
  twoTone: "div";
  addUser: "div";
  buttom2: "div";
  buttomText2: "div";
  twoTone2: "div";
  password: "div";
  iconlyCurvedPassword: "div";
  rectangle: "div";
  buttom3: "div";
  buttomText3: "div";
  twoTone3: "div";
  arrowDownCircle: "div";
  rectangle2: "div";
  buttom4: "div";
  buttomText4: "div";
  twoTone4: "div";
  logout: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSettingsScreen__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSettingsScreen__VariantsArgs;
    args?: PlasmicSettingsScreen__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSettingsScreen__Fetches;
  } & Omit<PlasmicSettingsScreen__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSettingsScreen__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSettingsScreen__ArgProps,
      internalVariantPropNames: PlasmicSettingsScreen__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSettingsScreen__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSettingsScreen";
  } else {
    func.displayName = `PlasmicSettingsScreen.${nodeName}`;
  }
  return func;
}

export const PlasmicSettingsScreen = Object.assign(
  // Top-level PlasmicSettingsScreen renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    patientAppConfig: makeNodeComponent("patientAppConfig"),
    appBar: makeNodeComponent("appBar"),
    arrowLeftCircle: makeNodeComponent("arrowLeftCircle"),
    headLine: makeNodeComponent("headLine"),
    h1Headline: makeNodeComponent("h1Headline"),
    settings: makeNodeComponent("settings"),
    frame: makeNodeComponent("frame"),
    buttom: makeNodeComponent("buttom"),
    buttomText: makeNodeComponent("buttomText"),
    twoTone: makeNodeComponent("twoTone"),
    addUser: makeNodeComponent("addUser"),
    buttom2: makeNodeComponent("buttom2"),
    buttomText2: makeNodeComponent("buttomText2"),
    twoTone2: makeNodeComponent("twoTone2"),
    password: makeNodeComponent("password"),
    iconlyCurvedPassword: makeNodeComponent("iconlyCurvedPassword"),
    rectangle: makeNodeComponent("rectangle"),
    buttom3: makeNodeComponent("buttom3"),
    buttomText3: makeNodeComponent("buttomText3"),
    twoTone3: makeNodeComponent("twoTone3"),
    arrowDownCircle: makeNodeComponent("arrowDownCircle"),
    rectangle2: makeNodeComponent("rectangle2"),
    buttom4: makeNodeComponent("buttom4"),
    buttomText4: makeNodeComponent("buttomText4"),
    twoTone4: makeNodeComponent("twoTone4"),
    logout: makeNodeComponent("logout"),

    // Metadata about props expected for PlasmicSettingsScreen
    internalVariantProps: PlasmicSettingsScreen__VariantProps,
    internalArgProps: PlasmicSettingsScreen__ArgProps
  }
);

export default PlasmicSettingsScreen;
/* prettier-ignore-end */
