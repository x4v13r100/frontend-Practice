import { Outlet } from "react-router-dom"

const LayoutAuth = () => {
    return (
        <div className="h-screen">
            <div >
                <Outlet />
            </div>
        </div>
    )
}

export default LayoutAuth