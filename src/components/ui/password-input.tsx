import * as React from "react"
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { Input } from "./input"

export interface PasswordInput
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInput>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    return (
  <Input type={showPassword ? "text" : "password" } suffix={showPassword ? <LuEye onClick={()=>setShowPassword(false)} className="size-6 text-neutral-500"/> : <LuEyeOff onClick={()=>setShowPassword(true)}  className="size-6 text-neutral-500"/>} className={className} {...props} ref={ref} />
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
