
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      <div className="glass-panel p-10 rounded-2xl max-w-md w-full hover-glass">
        <h1 className="text-8xl font-display font-bold text-crysta-blue mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-crysta-dark mb-4">Page Not Found</h2>
        <p className="text-crysta-gray mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="custom-button inline-flex items-center bg-crysta-blue hover:bg-crysta-blue/90 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-crysta-blue/20 transition-all duration-300 hover:-translate-y-1"
        >
          <Home className="mr-2 h-4 w-4" />
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
