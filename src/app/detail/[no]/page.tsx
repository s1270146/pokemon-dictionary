import DetailView from '@/features/detail/components/DetailView';

export default function Detail() {
  return (
    <div
      className="bg-[url('/images/background/pattern.svg')] bg-repeat"
      style={{
        backgroundColor: '#f0f0f0',
      }}
    >
      <DetailView />
    </div>
  );
}
