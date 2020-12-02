import type { HTMLAttributes } from "react"
import cn from "classnames"

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  isVariant?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, isVariant, ...rest }) => {
  return (
    <div className={`inline-flex ${!isVariant ? "rounded-md shadow" : ""}`} {...rest}>
      {/* prettier-ignore */}
      <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out",
            { "text-white bg-indigo-600 hover:bg-indigo-500": !isVariant },
            { "text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:border-indigo-300": isVariant }
          )}
        >
        {children}
      </button>
    </div>
  )
}
