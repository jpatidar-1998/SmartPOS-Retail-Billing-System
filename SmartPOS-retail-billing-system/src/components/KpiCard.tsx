type KpiCardProps = {
  title: string;
  value: string | number;
};

export default function KpiCard({ title, value }: KpiCardProps) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h3>{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}