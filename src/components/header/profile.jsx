import { UserIcon } from "@/assets/icons/sidebar"

const Profile = () => {
  return (
    <div className="flex gap-x-[10px]">
      <div className="min-w-[54px] size-[54px] aspect-square bg-[#ffffff33] flex justify-center items-center rounded-full">
        <UserIcon className="min-w-6 min-h-6 lg:min-w-7 lg:min-h-7 size-7 text-white" />
      </div>
      <div className="flex flex-col whitespace-nowrap">
        <p className="text-text-1 text-base md:text-lg font-semibold">Justin Carder</p>
        <p className="text-text-2 text-sm">Admin</p>
      </div>
    </div>
  );
}

export default Profile
