import React from "react";
import c from "classnames";
import {Modal} from "react-overlays";

import Button from "./Button";

const sizeMap = {
    "small": "sm",
    "large": "lg"
};

const defaultStyle = {
    position: "absolute",
    top: "50%", left: "50%",
    transform: `translate(-50%, -50%)`,
};

export default function ({className, open, size, title, footer, children, staticBackdrop, ...props}) {
    return (
        <Modal
            backdropClassName="modal-backdrop"
            backdrop={staticBackdrop ? "static" : true}
            show={open}
            {...props}
        >
            <div className={c("modal-dialog", {
                ["modal-" + sizeMap[size]]: size
            }, className)} style={defaultStyle}>
                <div className="modal-content">
                    { props.onHide ? <div className="modal-header">
                        <Button aria-label="Close" className="close" type="button" onClick={props.onHide}>
                            <clr-icon aria-hidden="true" shape="close"/>
                        </Button>
                        <h3 className="modal-title">{title}</h3>
                    </div> : null }
                    <div className="modal-body">{children}</div>
                    <div className="modal-footer">
                        {footer}
                    </div>
                </div>
            </div>
        </Modal>
    );
}