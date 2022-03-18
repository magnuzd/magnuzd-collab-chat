// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 72tUXrciMYQcBHG6D1vyXy
// Component: -YNYpCYStX4mS
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import Shell from "../../Shell"; // plasmic-import: FfB2otMCSMs8U/component
import Card from "../../Card"; // plasmic-import: 4ryXn--4f1MZD/component
import TextInput from "../../TextInput"; // plasmic-import: QtgH6B6JlnAfz/component
import Button from "../../Button"; // plasmic-import: 5DE4ToOecQeHY/component
import ListItem from "../../ListItem"; // plasmic-import: HUBrdDYNv1H-8/component
import NavLevel1 from "../../NavLevel1"; // plasmic-import: hTinKt-4uikWq/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_dls_css from "../dls/plasmic_dls.module.css"; // plasmic-import: wKYGFqyVBmDVb7fPCj2tLF/projectcss
import projectcss from "./plasmic_copy_of_text_messaging_app.module.css"; // plasmic-import: 72tUXrciMYQcBHG6D1vyXy/projectcss
import sty from "./PlasmicNewMessage.module.css"; // plasmic-import: -YNYpCYStX4mS/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: T2ZHvLJ9kHHH8y/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: stDZdaEWpQOmVV/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: _YyChvp-V52F2m/icon

export type PlasmicNewMessage__VariantMembers = {};

export type PlasmicNewMessage__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewMessage__VariantsArgs;
export const PlasmicNewMessage__VariantProps = new Array<VariantPropType>();

export type PlasmicNewMessage__ArgsType = {};
type ArgPropType = keyof PlasmicNewMessage__ArgsType;
export const PlasmicNewMessage__ArgProps = new Array<ArgPropType>();

export type PlasmicNewMessage__OverridesType = {
  root?: p.Flex<"div">;
  shell?: p.Flex<typeof Shell>;
  card?: p.Flex<typeof Card>;
  textInput?: p.Flex<typeof TextInput>;
  button?: p.Flex<typeof Button>;
  listItem?: p.Flex<typeof ListItem>;
  navLevel1?: p.Flex<typeof NavLevel1>;
  h2?: p.Flex<"h2">;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultNewMessageProps {
  className?: string;
}

function PlasmicNewMessage__RenderFunc(props: {
  variants: PlasmicNewMessage__VariantsArgs;
  args: PlasmicNewMessage__ArgsType;
  overrides: PlasmicNewMessage__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <React.Fragment>
      {}
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            plasmic_dls_css.plasmic_tokens,
            sty.root
          )}
        >
          <Shell
            data-plasmic-name={"shell"}
            data-plasmic-override={overrides.shell}
            className={classNames("__wab_instance", sty.shell)}
          >
            <Card
              data-plasmic-name={"card"}
              data-plasmic-override={overrides.card}
              className={classNames("__wab_instance", sty.card)}
            />

            <div className={classNames(projectcss.all, sty.freeBox__eyIrP)}>
              <TextInput
                data-plasmic-name={"textInput"}
                data-plasmic-override={overrides.textInput}
                className={classNames("__wab_instance", sty.textInput)}
              />
            </div>

            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
            />

            <div className={classNames(projectcss.all, sty.freeBox__aAFwj)}>
              <ListItem
                data-plasmic-name={"listItem"}
                data-plasmic-override={overrides.listItem}
                className={classNames("__wab_instance", sty.listItem)}
              />
            </div>

            <NavLevel1
              data-plasmic-name={"navLevel1"}
              data-plasmic-override={overrides.navLevel1}
              className={classNames("__wab_instance", sty.navLevel1)}
            >
              <h2
                data-plasmic-name={"h2"}
                data-plasmic-override={overrides.h2}
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2,
                  "" as const
                )}
                id={"" as const}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#FCFCFC" }}
                  >
                    {"ANDNNDN"}
                  </span>
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </h2>
            </NavLevel1>
          </Shell>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "shell",
    "card",
    "textInput",
    "textbox",
    "button",
    "listItem",
    "navLevel1",
    "h2"
  ],
  shell: [
    "shell",
    "card",
    "textInput",
    "textbox",
    "button",
    "listItem",
    "navLevel1",
    "h2"
  ],
  card: ["card"],
  textInput: ["textInput", "textbox"],
  button: ["button"],
  listItem: ["listItem"],
  navLevel1: ["navLevel1", "h2"],
  h2: ["h2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  shell: typeof Shell;
  card: typeof Card;
  textInput: typeof TextInput;
  button: typeof Button;
  listItem: typeof ListItem;
  navLevel1: typeof NavLevel1;
  h2: "h2";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewMessage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewMessage__VariantsArgs;
    args?: PlasmicNewMessage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewMessage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewMessage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNewMessage__ArgProps,
      internalVariantPropNames: PlasmicNewMessage__VariantProps
    });

    return PlasmicNewMessage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewMessage";
  } else {
    func.displayName = `PlasmicNewMessage.${nodeName}`;
  }
  return func;
}

export const PlasmicNewMessage = Object.assign(
  // Top-level PlasmicNewMessage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    shell: makeNodeComponent("shell"),
    card: makeNodeComponent("card"),
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),
    listItem: makeNodeComponent("listItem"),
    navLevel1: makeNodeComponent("navLevel1"),
    h2: makeNodeComponent("h2"),

    // Metadata about props expected for PlasmicNewMessage
    internalVariantProps: PlasmicNewMessage__VariantProps,
    internalArgProps: PlasmicNewMessage__ArgProps
  }
);

export default PlasmicNewMessage;
/* prettier-ignore-end */
