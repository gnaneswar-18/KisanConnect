"use client"

const LoadingSpinner = ({
  message = "Loading...",
  icon = "🌟",
  size = "large", // small, medium, large
}) => {
  const sizeClasses = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16",
  }

  const iconSizes = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-sky-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div
            className={`animate-spin rounded-full ${sizeClasses[size]} border-4 border-violet-200 border-t-violet-600 mx-auto`}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={iconSizes[size]}>{icon}</span>
          </div>
        </div>
        <p className="mt-4 text-slate-600 font-medium">{message}</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
