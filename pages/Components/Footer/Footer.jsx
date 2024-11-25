const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">&copy; 2024 Your Company Name. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.36 5.64a9 9 0 11-12.72 12.72 9 9 0 0112.72-12.72z"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.85 6.49A10 10 0 015.14 6.5"
                />
              </svg>
            </a>
          </div>
          <p className="text-gray-400 mt-4">
           Tailwind CSS
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  