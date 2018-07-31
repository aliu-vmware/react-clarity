import React from "react";
import c from "classnames";

const validTypes = ["info", "warning", "success", "danger"];
const typeIcons = {
    info: "info-circle",
    warning: "exclamation-triangle",
    success: "check-circle",
    danger: "exclamation-circle"
};

function Alert ({className, children,
                             type = "info",
                             closeable = true,
                             small = false,
                             onClose,
                             appLevel = false, ...props}) {
    return (
        <div className={c(`alert alert-${type}`, {"alert-sm": small, "alert-app-level": appLevel}, className)} {...props}>
            <div className="alert-items">
                <div className="alert-item static">
                    <div className="alert-icon-wrapper">
                        <clr-icon class="alert-icon" shape={typeIcons[type]}></clr-icon>
                    </div>
                    <div className="alert-text">
                        {children}
                    </div>
                </div>
            </div>
            { closeable ? <button type="button" className="close" aria-label="Close" onClose={onClose}>
                <clr-icon aria-hidden="true" shape="close"></clr-icon>
            </button> : null }
        </div>
     );
}

export default Alert;