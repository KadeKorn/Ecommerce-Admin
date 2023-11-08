export default function AuthLayout({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <div className="flex items-center justify-center h-full w-full">
            {children}
        </div>
    )
}
//This will apply to all child files/routes in Auth very cool