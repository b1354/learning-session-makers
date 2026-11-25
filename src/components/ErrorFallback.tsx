
import React from "react";

interface ErrorFallbackProps {
  onRetry?: () => void;
  btnText?: string;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  onRetry,
  btnText
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="flex flex-col items-center text-center max-w-md">

        {/* Cute Illustration */}
        <div className="relative mb-8">
          <div className="text-9xl animate-bounce">
            👻
          </div>

          <div className="absolute -top-2 -right-3 text-4xl animate-pulse">
            💥
          </div>

          <div className="absolute bottom-2 -left-5 text-3xl">
            💧
          </div>

          <div className="absolute -bottom-2 right-0 text-3xl">
            ⚠️
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-800">
          Oops! Something went wrong
        </h1>

        <p className="mt-3 text-gray-500 leading-relaxed">
          An unexpected error occurred while rendering
          this page. Don't worry, you can try again.
        </p>

        {/* Retry Button */}
        {onRetry && btnText &&
          <button
            onClick={onRetry}
            className="mt-8 inline-flex items-center gap-2 rounded-lg
            bg-blue-600 px-6 py-3 font-medium text-white
            transition hover:bg-blue-700 active:scale-95"
          >
            {btnText}
          </button>
        }

        <p className="mt-6 text-sm text-gray-400">
          If the problem persists, please try again later.
        </p>
      </div>
    </div>
  );
};

export default ErrorFallback;
