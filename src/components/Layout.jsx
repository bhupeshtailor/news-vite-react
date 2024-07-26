import { Outlet, Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const Layout = (props) => {

    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2" to="/">NewsPortal</Link>

                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo2" aria-controls="navbarTogglerDemo2" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarTogglerDemo2">
                        <ul className="navbar-nav me-auto mb-2 mb-xl-0 fs-5">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <LoadingBar
                color='#f11946'
                height={5}
                progress={props.progress}
                onLoaderFinished={() => props.setProgress(0)}
            />

            <Outlet />
        </>
    );
};

export default Layout;