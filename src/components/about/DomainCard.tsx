type DomainCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};
const DomainCard = ({ icon, title, subtitle }: DomainCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-white shadow-lg group">
      {icon}
      <h3 className="font-semibold mb-2 text-lg">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  );
};

export default DomainCard;
