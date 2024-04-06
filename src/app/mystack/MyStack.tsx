import Projects from "@/app/projects/Projects";

export default function MyStack() {
    return (
        <div id="mystack" className="flex min-h-screen flex-col items-center p-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6 space-x-6">
                <table className="table-auto w-full">
                    {/* Hier könnt ihr euren Stack reinschreiben*/}
                    <tbody>
                    <tr>
                        <td className="px-4 py-2">Java</td>
                        <td className="px-4 py-2">Python</td>
                        <td className="px-4 py-2">HTML</td>
                        <td className="px-4 py-2">CSS</td>
                        <td className="px-10 py-2">JavaScript/TypeScript</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">Spring Boot</td>
                        <td className="px-4 py-2">Flask</td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2">Tailwind</td>
                        <td className="px-10 py-2">ReactJS</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2"></td>
                        <td className="px-10 py-2">NextJS</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <Projects />
        </div>
    )
}