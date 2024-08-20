import { Link, Outlet } from "react-router-dom"
import path from "../../utils/path"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ToastContainer } from "react-toastify";

const LayoutManage = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="w-full h-screen flex items-center">
                <div className="w-[20%] flex flex-col items-center pt-4 h-screen bg-yellow-300">
                    <div>
                        <span className="text-[30px] font-bold">NT</span>
                    </div>
                    <div className="w-[100%] flex flex-col gap-2 mt-6">
                        <div className="w-full h-14 flex justify-center cursor-pointer items-center bg-white">
                            <Link to={`${path.ADMIN_USER}`}>Manage User</Link>
                        </div>
                        <div className="w-full h-14 flex justify-center cursor-pointer items-center bg-white">
                            <Link to={`${path.ADMIN_POST}`}>Create Post</Link>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </QueryClientProvider >
    )
}

export default LayoutManage