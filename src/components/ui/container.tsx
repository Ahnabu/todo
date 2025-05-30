
type TContainerProps = {
    children: React.ReactNode;
}

const Container = ({ children }: TContainerProps) => {
    return (
        <div className="min-h-screen w-full mx-auto lg:max-w-7xl">{children} </div>
    )
}

export default Container;