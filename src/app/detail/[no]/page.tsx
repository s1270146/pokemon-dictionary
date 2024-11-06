import DetailNavigation from '@/features/detail/navigation/components/DetailNavigation';
import ProfileDetail from '@/features/detail/profile/components/ProfileDetail';

export default function Detail() {
  return (
    <div
      className="bg-[url('/images/background/pattern.svg')] bg-repeat"
      style={{
        backgroundColor: '#f0f0f0',
      }}
    >
      <DetailNavigation />
      <ProfileDetail />
    </div>
  );
}
