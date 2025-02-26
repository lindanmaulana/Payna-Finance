import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
    className?: string
}
const Container = (props: ContainerProps) => {
    const {children, className} = props
    return (
        <div className={`${className} container px-6 xl:px-0`}>
            {children}
        </div>
    )
}

export default Container