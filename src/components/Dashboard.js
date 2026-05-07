import React from 'react'
import Notes from './Notes'

const Dashboard = (props) => {
    return (
        <div className="min-h-screen position-relative overflow-hidden" style={{ paddingTop: '100px' }}>
            <div className="bg-orb-3"></div>
            <div className="container position-relative z-1">
                <div className="glass-panel p-5 mb-5 mt-4 border-primary border-opacity-50 float-anim" style={{ animationDuration: '8s' }}>
                    <div className="d-flex align-items-center mb-2">
                        <div className="rounded-circle d-inline-flex align-items-center justify-content-center me-4 shadow-lg" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}>
                            <i className="fa-solid fa-gauge-high text-white fs-4"></i>
                        </div>
                        <div>
                            <h2 className="mb-1 text-gradient fw-black display-6">Workspace Dashboard</h2>
                            <p className="text-muted mb-0 fs-5">Manage your luxury digital workspace</p>
                        </div>
                    </div>
                </div>
                <Notes showalert={props.showalert} />
            </div>
        </div>
    )
}

export default Dashboard
