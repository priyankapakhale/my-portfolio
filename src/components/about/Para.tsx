type ParaProps = {
  children: React.ReactNode;
};

const Para = ({ children }: ParaProps) => {
  return <p className="text-lg leading-relaxed text-gray-600">{children}</p>;
};

export default Para;
