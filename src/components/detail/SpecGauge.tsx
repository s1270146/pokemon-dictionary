interface SpecGaugeProps {
  title: string;
  count: number;
}

export default function SpecGauge({ count, title }: SpecGaugeProps) {
  return (
    <div className="flex mb-3">
      <p className="text-lg font-bold w-1/5">{title}</p>
      <div className="flex text-lg font-bold w-4/5">
        {Array.from({ length: count }, (_, i) => (
          <div
            key={`hp${i}`}
            className="w-[calc(15/1280*100vw)] h-[calc(35/1280*100vw)] max-w-[15px] max-h-[35px] rounded-lg mr-[calc(5/1280*100vw)] bg-[#fc0]"
          />
        ))}
        {Array.from({ length: 15 - count }, (_, i) => (
          <div
            key={`not hp${i}`}
            className="w-[calc(15/1280*100vw)] h-[calc(35/1280*100vw)] max-w-[15px] max-h-[35px] rounded-lg mr-[calc(5/1280*100vw)] bg-gray-100"
          />
        ))}
      </div>
    </div>
  );
}
