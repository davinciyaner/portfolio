const projects = [
    {
        id: 1,
        name: 'Tesla Website Clone',
        FrontEnd: 'React Native',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: 'Projekt'
    },
    {
        id: 2,
        name: 'Uber Clone',
        FrontEnd: 'React Native',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: 'Projekt2'
    },
    {
        id: 3,
        name: 'Fiverr Clone',
        FrontEnd: 'ReactJS',
        BackEnd: 'NodeJs mit ExpressJS',
        Datanbank: 'MongoDB',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: 'Projekt3'
    },
    {
        id: 4,
        name: 'Rocket Space',
        FrontEnd: 'HTML CSS JavaScript',
        BackEnd: 'Python mit Flask',
        Datanbank: 'MySQL',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: 'Projekt 4'
    },
    {
        id: 5,
        name: 'Feuerwehrverwaltung',
        FrontEnd: 'HTML CSS JavaScript',
        BackEnd: 'Java',
        Datanbank: 'MySQL',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: 'Projekt 5'
    },
    {
        id: 6,
        name: 'Chatsystem',
        FrontEnd: 'Java',
        BackEnd: 'Java',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: 'Projekt 6'
    },
    {
        id: 7,
        name: 'Flappy Bird Clone',
        FrontEnd: 'HTML CSS JavaScript',
        BackEnd: 'Java',
        Datanbank: 'MySQL',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: 'Projekt 7'
    },
    {
        id: 8,
        name: 'Planetbots',
        FrontEnd: 'ReactJS & TailwindCSS',
        BackEnd: 'NodeJS mit ExpressJS',
        Datanbank: 'MongoDB',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: 'Projekt8'
    }
]

export default function Projects() {
    return (
        <div id="projects" className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-3 gap-y-5 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-8">
                {projects.map((project) => (
                    <div key={project.id} className="group relative">
                        <div
                            className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                                src={project.imageSrc}
                                alt={project.imageAlt}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm font-bold text-zinc-900">
                                    <span aria-hidden="true" className="absolute inset-0 text-center">
                                        {project.name}
                                    </span>
                                </h3>
                                <p className="mt-1 flex justify-between text-center text-sm">{project.FrontEnd}</p>
                                <p className="mt-1 flex justify-between text-center text-sm">{project.BackEnd}</p>
                                <p className="mt-1 flex justify-between text-center text-sm">{project.Datanbank}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}