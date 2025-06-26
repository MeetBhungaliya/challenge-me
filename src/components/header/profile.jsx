import { UserIcon } from "@/assets/icons/sidebar";

const Profile = () => {
  return (
    <div className="flex gap-x-[10px]">
      <div className="min-w-9 size-9 md:min-w-11 md:size-11 lg:min-w-[54px] lg:size-[54px] aspect-square bg-[#ffffff33] flex justify-center items-center rounded-full">
        <UserIcon className="min-w-5 min-h-5 size-5 md:min-w-6 md:min-h-6 md:size-6 lg:min-w-7 lg:min-h-7 lg:size-7 text-white" />
      </div>
      <div className="flex flex-col whitespace-nowrap">
        <p className="text-text-1 text-sm md:text-base lg:text-lg font-semibold">
          Justin Carder
        </p>
        <p className="text-text-2 text-xs md:text-sm">Admin</p>
      </div>
    </div>
  );
};

export default Profile;
