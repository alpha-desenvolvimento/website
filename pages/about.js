export default function About() {
  return (
    <section className="min-h-screen pt-16 pb-20">
      <div className="absolute z-0 h-full w-full">
        <div className="h-48 w-48 absolute top-0 filter blur-3xl">
          <div className="w-full h-full rounded-full absolute bg-gradient-to-br from-amber9 to-crimson9 backdrop-filter bg-blend-multiply" />
          <div className="w-full h-full rounded-full absolute bg-grain backdrop-filter backdrop-contrast-150 brightness-[700]" />
        </div>

        <div className="h-72 w-72 absolute top-1/2 right-0 filter blur-3xl">
          <div className="w-full h-full rounded-full absolute bg-gradient-to-br from-amber9 to-crimson9 backdrop-filter bg-blend-multiply" />
          <div className="w-full h-full rounded-full absolute bg-grain backdrop-filter backdrop-contrast-150 brightness-[700]" />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl px-6 mx-auto md:text-center">
        <h1 className="text-4xl md:text-6xl tracking-tight font-semibold drop-shadow-xl mb-4">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-xl text-mauve11 drop-shadow-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed
          et quis earum ipsa doloribus ipsum at minus vel maxime?
        </p>
      </div>

      <div className=" pt-40">
        <div className="relative z-10 max-w-3xl px-6 mx-auto">
          <div className="flex flex-wrap w-full justify-between gap-4 text-mauve12">
            <div className="bg-mauve2 shadow-lg px-4 py-4 w-full rounded-md">
              <p className="text-xl font-semibold">Lorem, ipsum dolor.</p>
              <p className="text-sm text-mauve11 mb-8">
                Lorem ipsum dolor sit.
              </p>
              <div className="flex">
                <a
                  className="inline-block ml-auto mr-0 px-2 py-1 text-mauve12 bg-mauve3 hover:bg-mauve4 active:bg-mauve5 focus:bg-mauve5 border border-mauve7 hover:border-mauve8 rounded-full shadow-sm hover:shadow-md transition-all"
                  href="#"
                >
                  Lorem, ipsum.
                </a>
              </div>
            </div>
            <div className="bg-mauve2 shadow-lg px-4 py-4 w-full rounded-md">
              <p className="text-xl font-semibold">Lorem, ipsum dolor.</p>
              <p className="text-sm text-mauve11 mb-8">
                Lorem ipsum dolor sit.
              </p>
              <div className="flex">
                <a
                  className="inline-block ml-auto mr-0 px-2 py-1 text-mauve12 bg-mauve3 hover:bg-mauve4 active:bg-mauve5 focus:bg-mauve5 border border-mauve7 hover:border-mauve8 rounded-full shadow-sm hover:shadow-md transition-all"
                  href="#"
                >
                  Lorem, ipsum.
                </a>
              </div>
            </div>
            <div className="bg-mauve2 shadow-lg px-4 py-4 w-full rounded-md">
              <p className="text-xl font-semibold">Lorem, ipsum dolor.</p>
              <p className="text-sm text-mauve11 mb-8">
                Lorem ipsum dolor sit.
              </p>
              <div className="flex">
                <a
                  className="inline-block ml-auto mr-0 px-2 py-1 text-mauve12 bg-mauve3 hover:bg-mauve4 active:bg-mauve5 focus:bg-mauve5 border border-mauve7 hover:border-mauve8 rounded-full shadow-sm hover:shadow-md transition-all"
                  href="#"
                >
                  Lorem, ipsum.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
