type LinkButtonProps = {
  url: string;
  children: React.ReactNode;
};

const LinkButton = ({ url, children }: LinkButtonProps) => {
  return (
    <a
      href={url}
      className="p-4 rounded-full shadow-lg group bg-blue-100 hover:bg-blue-200 hover:scale-110 transition-all duration-300"
    >
      {children}
    </a>
  );
};

export default LinkButton;
