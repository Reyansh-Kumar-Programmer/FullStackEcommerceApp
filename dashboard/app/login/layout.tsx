import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginLayoutProps = {
    children: React.ReactNode
}

export default function LoginLayout({children}: LoginLayoutProps) {
    const token = cookies().get('token')?.value;

    if(!!token) {
        return redirect('/dashboard');
    }

    return <div>{children}</div>
}