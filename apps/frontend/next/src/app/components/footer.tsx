import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/te-ce/fullstack-playground"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Github Project
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://7cworks.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        7cworks.com →
      </a>
    </footer>
  );
};
