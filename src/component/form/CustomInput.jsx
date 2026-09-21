import React, { useId, useState, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";

const CustomInput = forwardRef(
  (
    { label, labelClassName = "", type = "text", className = "", ...props },
    ref
  ) => {
    const id = useId();
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = (e) => {
      setIsFocused(true);
      if (props.onFocus) props.onFocus(e);
    };

    const handleBlur = (e) => {
      setIsFocused(false);
      if (props.onBlur) props.onBlur(e);
    };

    const handleChange = (e) => {
      setHasValue(!!e.target.value);
      if (props.onChange) props.onChange(e);
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const inputType =
      type === "password" ? (showPassword ? "text" : "password") : type;

    const floating = isFocused || hasValue;

    return (
      <div className="w-full relative group">
        {label && (
          <label
            htmlFor={id}
            className={`absolute left-3 px-1 transition-all duration-300 ease-smooth pointer-events-none
              ${
                floating
                  ? "top-0 text-xs text-primary-600 bg-white z-10 -translate-y-1/2 scale-90 origin-left font-medium"
                  : "top-1/2 -translate-y-1/2 text-sm text-slate-500"
              } ${labelClassName}`}
          >
            <span className="relative z-10">{label}</span>
            <span
              className={`absolute inset-0 bg-white rounded-full transition-opacity duration-300 ${
                floating ? "opacity-0" : "opacity-100"
              }`}
            />
          </label>
        )}

        <div className="relative">
          <input
            id={id}
            ref={ref}
            type={inputType}
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`px-4 py-3 rounded-lg bg-white text-slate-900 outline-none w-full transition-all duration-300
              border shadow-sm
              ${
                isFocused
                  ? "border-primary-400 ring-4 ring-primary-500/10 shadow-md"
                  : "border-slate-300/80 hover:border-slate-400"
              }
              ${className}`}
          />

          {type === "password" && (
            <button
              type="button"
              tabIndex="-1"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors duration-200"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";
export default CustomInput;