import MyStack from "@/app/mystack/MyStack";
import Projects from "@/app/projects/Projects";
import MouseCursor from "@/app/mousecursor/MouseCursor";
import Moon from "@/app/moon/Moon";

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col items-center bg-zinc-900 p-8">
          <MouseCursor />
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6 space-x-6">
              <a
                  href="#about"
              >
                  About
              </a>
              <a
                  href="#mystack"
              >
                  MyStack
              </a>
              <a
                  href="#projects"
              >
                  Projects
              </a>
          </nav>
          <div id="about" className="flex -space-x-1 overflow-hidden">
              <img className="inline-block h-64 w-64 rounded-full ring-2 ring-white"
                   src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                   alt=""/>
          </div>
          <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex p-6 lg:px-8">
              <div
                  className="font-mono bg-gradient-to-r from-pink-900 to to-blue-500 text-transparent bg-clip-text font-bold text-4xl">
                  Finn Paustian
              </div>
          </div>
          <div className="z-10 max-w-2xl w-full items-center justify-center front-mono text-sm lg:flex p-6 lg:px-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
              quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
              sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
              minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
              quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
              fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
              consequuntur! Commodi minima excepturi repudiandae velit hic maxime
              doloremque. Quaerat provident commodi consectetur veniam similique ad
              earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
              fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
              suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
              modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
              totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
              quasi aliquam eligendi, placeat qui corporis!
          </div>
          <div className="flex min-h-2 flex-col items-center p-8">
              <div className="flex flex-col items-center space-y-8">
                  <MyStack />
              </div>
          </div>
      </div>
  );
}
