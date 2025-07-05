type LinkButtonProps = {
  url: string;
  children: React.ReactNode;
};

const LinkButton = ({ url, children }: LinkButtonProps) => {
  return (
    <a href={url} className="p-4 rounded-full shadow-lg group">
      {children}
    </a>
  );
};

export default LinkButton;
