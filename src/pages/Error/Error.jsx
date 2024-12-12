import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300 text-white">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-2xl font-semibold mt-4">Page Not Found</p>
        <p className="text-lg mt-2 font-bold">Oops! The page you are looking for does not exist.</p>
        <Link to={'/'}>
            <button
                className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition duration-300"
            >
              🏡  Go Back Home
            </button>
        </Link>
    </div>
    );
};

export default Error;