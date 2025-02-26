import { ReactNode } from "react"

interface SectionProps {
    children: ReactNode
    className?: string
}
const Section = (props: SectionProps) => {
    const {children, className} = props
    return (
        <section className={`${className}`}>
            {children}
        </section>
    )
}

export default Section