import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="landing-page position-relative min-vh-100 overflow-hidden" style={{ paddingTop: '100px' }}>
            <div className="bg-orb-3"></div>
            
            {/* Hero Section */}
            <section className="hero-section container text-center py-5 mt-5 position-relative z-1">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="badge rounded-pill bg-dark border border-secondary px-4 py-2 mb-4 shadow-lg" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0,0,0,0.5)!important' }}>
                            <span className="text-primary me-2">✦</span> <span className="text-white fw-medium">iNoteBook 3.0 is here</span>
                        </div>
                        <h1 className="display-2 fw-black mb-4 lh-sm">
                            Capture your brilliance in <br/>
                            <span className="text-gradient">pure luxury.</span>
                        </h1>
                        <p className="lead text-muted mb-5 px-lg-5 fs-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            Elevate your digital workspace with an intuitive, ultra-secure, and beautifully designed note-taking experience. Never lose a thought again.
                        </p>
                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-4 mt-2">
                            <Link to="/signup" className="btn-luxury text-decoration-none px-5 py-4 fs-5 d-flex align-items-center justify-content-center">
                                Start Creating Free <i className="fa-solid fa-arrow-right ms-3"></i>
                            </Link>
                            <Link to="/login" className="btn-outline-luxury text-decoration-none px-5 py-4 fs-5 d-flex align-items-center justify-content-center">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
                
                {/* 3D Dashboard Preview */}
                <div className="mt-5 pt-5 pb-5 position-relative">
                    <div className="float-anim mx-auto position-relative" style={{ maxWidth: '1000px', perspective: '1200px' }}>
                        <div className="glass-panel p-2 shadow-lg" style={{ transform: 'rotateX(8deg) rotateY(-5deg) rotateZ(2deg)', boxShadow: '0 40px 100px -20px rgba(139, 92, 246, 0.4)' }}>
                            <div className="rounded-4 overflow-hidden position-relative" style={{ background: '#050505', height: '500px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                {/* Abstract mock UI Topbar */}
                                <div className="d-flex align-items-center border-bottom border-secondary border-opacity-25 p-3 px-4 bg-black bg-opacity-50">
                                    <div className="d-flex gap-2 me-4">
                                        <div className="rounded-circle bg-danger" style={{width: '12px', height: '12px'}}></div>
                                        <div className="rounded-circle bg-warning" style={{width: '12px', height: '12px'}}></div>
                                        <div className="rounded-circle bg-success" style={{width: '12px', height: '12px'}}></div>
                                    </div>
                                    <div className="bg-white bg-opacity-10 rounded px-3 py-1 text-muted fs-7 mx-auto" style={{ width: '300px' }}>
                                        <i className="fa-solid fa-lock me-2 fs-8"></i> inotebook.app
                                    </div>
                                </div>
                                {/* Mock UI Body */}
                                <div className="d-flex h-100">
                                    <div className="col-3 border-end border-secondary border-opacity-25 p-4 bg-black bg-opacity-25">
                                        <div className="bg-primary bg-opacity-25 rounded w-75 mb-4" style={{height: '12px'}}></div>
                                        <div className="bg-white bg-opacity-10 rounded w-100 mb-3" style={{height: '12px'}}></div>
                                        <div className="bg-white bg-opacity-10 rounded w-50 mb-3" style={{height: '12px'}}></div>
                                        <div className="bg-white bg-opacity-10 rounded w-75 mb-3" style={{height: '12px'}}></div>
                                    </div>
                                    <div className="col p-5 text-start position-relative overflow-hidden">
                                        {/* Inner glowing orb */}
                                        <div className="position-absolute top-0 end-0 w-50 h-50 rounded-circle" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
                                        
                                        <h2 className="mb-4 text-white fw-bold display-6">Project Genesis</h2>
                                        <div className="row g-4 position-relative z-1">
                                            <div className="col-md-6">
                                                <div className="glass-panel p-4 h-100 border-primary border-opacity-50">
                                                    <h5 className="text-primary mb-3"><i className="fa-solid fa-code me-2"></i> Phase 1 Architecture</h5>
                                                    <p className="text-muted mb-0 lh-lg">Implement the core routing logic, secure API endpoints, and establish JWT authentication flow.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="glass-panel p-4 h-100">
                                                    <h5 className="text-info mb-3"><i className="fa-solid fa-paintbrush me-2"></i> UI/UX Polish</h5>
                                                    <p className="text-muted mb-0 lh-lg">Design the dark luxury aesthetic using deep purples, high-contrast glassmorphism, and smooth animations.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="glass-panel p-4 h-100">
                                                    <h5 className="text-success mb-3"><i className="fa-solid fa-rocket me-2"></i> Deployment</h5>
                                                    <p className="text-muted mb-0 lh-lg">Push to Vercel and monitor the CI/CD pipeline for optimal performance.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section container py-5 mt-5 position-relative z-1">
                <div className="text-center mb-5 pb-4">
                    <h2 className="display-4 fw-bold text-white mb-3">Why choose <span className="text-gradient">iNoteBook?</span></h2>
                    <p className="text-muted lead mx-auto" style={{ maxWidth: '600px' }}>A workspace designed for absolute focus, blinding speed, and breathtaking elegance.</p>
                </div>
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="glass-panel p-5 h-100 text-center rounded-4">
                            <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow-lg" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.05))', color: '#a78bfa', fontSize: '2rem', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                                <i className="fa-solid fa-shield-halved"></i>
                            </div>
                            <h3 className="text-white mb-3 fw-bold">Cloud Security</h3>
                            <p className="text-muted mb-0 fs-6">Your thoughts are yours alone. End-to-end encryption ensures total privacy across all your devices.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="glass-panel p-5 h-100 text-center rounded-4">
                            <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow-lg" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))', color: '#60a5fa', fontSize: '2rem', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <h3 className="text-white mb-3 fw-bold">Lightning Fast</h3>
                            <p className="text-muted mb-0 fs-6">Built on a cutting-edge MERN stack to guarantee zero lag when inspiration strikes.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="glass-panel p-5 h-100 text-center rounded-4">
                            <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow-lg" style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.05))', color: '#f472b6', fontSize: '2rem', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
                                <i className="fa-solid fa-wand-magic-sparkles"></i>
                            </div>
                            <h3 className="text-white mb-3 fw-bold">Dark Luxury UI</h3>
                            <p className="text-muted mb-0 fs-6">An aesthetic that rests your eyes and inspires your creativity simultaneously.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-5 py-5 position-relative z-1" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                <div className="container text-center">
                    <h4 className="fw-bold text-white mb-3"><i className="fa-solid fa-bolt text-primary"></i> iNoteBook</h4>
                    <p className="text-muted mb-0">© 2026 iNoteBook. All rights reserved. Crafted with precision.</p>
                </div>
            </footer>
        </div>
    )
}

export default Home
