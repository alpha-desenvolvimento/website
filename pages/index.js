export default function Home() {
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
          An imaginary coding collective
        </h1>
        <p className="text-xl text-mauve11 drop-shadow-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sed
          et quis earum ipsa doloribus ipsum at minus vel maxime?
        </p>
      </div>
    </section>
  );
}
