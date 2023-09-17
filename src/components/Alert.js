import React from 'react'

const Alert = (props) => {
    return (
        <div style={{ height: "50px" }}>
            {props.Alerts &&
                <div
                    // {} SHOULD BE ADDED FOR JAVASCRIPT.
                    className={`alert alert-${props.Alerts.type} alert-dismissible fade show text-dark`}
                    role="alert"
                >
                    <strong>
                        {props.Alerts.type} : {props.Alerts.message}
                    </strong>
                    {/* button is deleted */}
                </div>}
        </div>
    )
}

export default Alert