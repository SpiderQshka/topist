import React from "react";
import { PageFlip } from "page-flip";
import "./styles.scss";

export default class HTMLFlipBook extends React.Component {
  pageFlip: any;
  el: any;
  childRef: any;
  props: any;
  componentDidMount() {
    this.pageFlip = new PageFlip(this.el, this.props);

    this.pageFlip.loadFromHTML(this.childRef);
    this.setHandlers();
  }

  setHandlers() {
    if (this.props.onFlip)
      this.pageFlip.on("flip", (e: any) => this.props.onFlip(e));

    if (this.props.onChangeOrientation)
      this.pageFlip.on("changeOrientation", (e: any) =>
        this.props.onChangeOrientation(e)
      );

    if (this.props.onChangeState)
      this.pageFlip.on("changeState", (e: any) => this.props.onChangeState(e));

    if (this.props.onInit)
      this.pageFlip.on("init", (e: any) => this.props.onInit(e));

    if (this.props.onUpdate)
      this.pageFlip.on("update", (e: any) => this.props.onUpdate(e));
  }

  render() {
    this.childRef = [];

    const childWithRef = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        ref: (dom: any) => {
          if (dom) this.childRef.push(dom);
        },
      });
    });

    return React.createElement(
      "div",
      {
        ref: (el) => (this.el = el),
        className: this.props.className,
        style: this.props.style,
      },
      childWithRef
    );
  }
}
