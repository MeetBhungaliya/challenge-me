import { EmailIcon } from "@/assets/icons/auth";
import {
  CakeIcon,
  ChallengeScroreIcon,
  CoinsIcon,
  CrownIcon,
  PhoneIcon,
  PointsIcon,
  VSIcon,
} from "@/assets/icons/user-management";
import { Button } from "@/components/ui/button";
import Img from "@/components/ui/Img";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { useMemo } from "react";
import { Link } from "react-router";

const UserDetails = () => {
  const userData = useMemo(
    () => ({
      id: faker.database.mongodbObjectId(),
      user_img: faker.image.avatar(),
      fname: faker.person.firstName(),
      lname: faker.person.lastName(),
      email: faker.internet.email(),
      number: "+1 1234 5879",
      dob: faker.date.past({ years: 20 }),
    }),
    []
  );

  return (
    <>
      <div className="h-max mb-4 sm:mb-6 lg:mb-[30px] flex gap-x-4">
        <div className="p-6 flex-8/12 bg-bg-3 rounded-2xl">
          <div className="flex gap-x-[10px] items-center justify-between">
            <div className="flex gap-x-[18px] items-center">
              <Img
                src={userData?.user_img}
                className="size-[90px] rounded-full"
                alt="user-image"
              />
              <div className="flex flex-col gap-y-1">
                <p className="text-text-1 font-semibold text-lg md:text-xl">
                  {userData.fname} {userData.lname}
                </p>
                <ul className="flex items-stretch gap-x-4">
                  <li className="text-xs text-text-2 flex gap-x-1 items-end">
                    <EmailIcon className="size-4" />
                    {userData.email}
                  </li>
                  <Separator
                    orientation="vertical"
                    className="min-h-4 bg-text-2 opacity-50"
                  />
                  <li className="text-xs text-text-2 flex gap-x-1 items-end">
                    <PhoneIcon className="size-4" />
                    {userData.number}
                  </li>
                  <Separator
                    orientation="vertical"
                    className="min-h-4 bg-text-2 opacity-50"
                  />
                  <li className="text-xs text-text-2 flex gap-x-1 items-end">
                    <CakeIcon className="size-4" />
                    {moment(userData.dob).format("DD/MM/YYYY")}
                  </li>
                </ul>
              </div>
            </div>
            <Button
              type="button"
              className="px-6 py-3 text-sm text-text-3 font-medium rounded-full bg-[#6B896926]"
            >
              Active
            </Button>
          </div>
        </div>
        <div className="p-6 flex-1/3 flex items-center justify-between bg-bg-3 rounded-2xl">
          <div className="space-y-3">
            <p className="text-text-1 text-base">Points</p>
            <div className="flex items-center gap-x-4">
              <PointsIcon className="size-10" />
              <p className="text-2xl text-[#FBCC00] font-bold">152</p>
            </div>
          </div>
          <Separator
            orientation="vertical"
            className="min-h-[76px] bg-text-2 opacity-50"
          />
          <div className="space-y-3">
            <p className="text-text-1 text-base">Coins</p>
            <div className="flex items-center gap-x-4">
              <CoinsIcon className="size-10" />
              <p className="text-2xl text-[#FBCC00] font-bold">100</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full p-6 pr-1 flex flex-col gap-y-6 bg-bg-3 rounded-2xl overflow-hidden">
        <p className="text-xl font-bold text-text-1">Challenges</p>
        <div className="h-full flex overflow-hidden">
          <ScrollArea className="w-full pr-5">
            <div className="grid grid-cols-3 gap-8">
              <Link
                to="challenge-details"
                className="p-4 flex justify-between gap-x-2 bg-bg-2 rounded-2xl"
              >
                <div className="flex flex-col items-center gap-y-[10px]">
                  <p className="text-xs text-text-1">You</p>
                  <Img
                    src={userData?.user_img}
                    className="size-[60px] min-w-[60px] aspect-square rounded-full"
                  />
                  <p className="text-xs text-text-3">1235 Votes</p>
                </div>
                <div className="w-full flex flex-col items-center gap-y-5">
                  <p className="text-xs text-[#FF0000]">
                    Voting ends in : 16 hours
                  </p>
                  <div className="w-full flex flex-col gap-y-3">
                    <VSIcon className="size-8 min-w-8 mx-auto text-text-3" />
                    <div className="flex flex-col gap-y-2">
                      <p className="text-xs text-text-1 text-center">
                        Active Challenge
                      </p>
                      <div className="w-full h-1.5 flex items-center bg-text-1 rounded-full">
                        <div className="w-1/2 h-full mx-auto">
                          <div className="w-1/2 h-full ml-auto rounded-l-full bg-[#256D20]" />
                        </div>
                        <ChallengeScroreIcon className="w-1 h-3 mx-auto" />
                        <div className="w-1/2 h-full mx-auto">
                          <div className="w-1/3 h-full mr-auto rounded-r-full bg-[#42D437]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-y-[10px]">
                  <p className="text-xs text-text-1 whitespace-nowrap">
                    {faker.person.fullName()}
                  </p>
                  <Img
                    src={faker.image.avatar()}
                    className="size-[60px] min-w-[60px] aspect-square rounded-full"
                  />
                  <p className="text-xs text-text-3">958 Votes</p>
                </div>
              </Link>
              <Link
                to="challenge-details"
                className="p-4 flex justify-between gap-x-2 bg-bg-2 rounded-2xl"
              >
                <div className="flex flex-col items-center gap-y-[10px]">
                  <p className="text-xs text-text-1">You</p>
                  <div className="relative">
                    <Img
                      src={userData?.user_img}
                      className="size-[60px] min-w-[60px] aspect-square rounded-full border border-[#FFC943] outline-3 outline-[#FFC9431A]"
                    />
                    <CrownIcon className="size-4 absolute top-0 right-0" />
                  </div>
                  <p className="text-xs text-text-3">1235 Votes</p>
                </div>
                <div className="w-full flex flex-col items-center gap-y-5">
                  <p className="text-center text-xs text-[#FFC943]">
                    1285 Points & 2 Coins earned
                  </p>
                  <div className="w-full flex flex-col gap-y-3">
                    <VSIcon className="size-8 min-w-8 mx-auto text-text-3" />
                    <div className="flex flex-col gap-y-2">
                      <p className="text-xs text-text-1 text-center">
                        Challenge Date - 14/02/2025
                      </p>
                      <div className="text-center text-[#FFC943]">
                        You’re the winner!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-y-[10px]">
                  <p className="text-xs text-text-2 whitespace-nowrap">
                    {faker.person.fullName()}
                  </p>
                  <Img
                    src={faker.image.avatar()}
                    className="size-[60px] min-w-[60px] aspect-square rounded-full mix-blend-luminosity"
                  />
                  <p className="text-xs text-text-2">958 Votes</p>
                </div>
              </Link>
              <Link
                to="challenge-details"
                className="p-4 flex justify-between gap-x-2 bg-bg-2 rounded-2xl"
              >
                <div className="flex flex-col items-center gap-y-[10px]">
                  <p className="text-xs text-text-2">You</p>
                  <Img
                    src={userData?.user_img}
                    className="size-[60px] min-w-[60px] aspect-square rounded-full mix-blend-luminosity"
                  />
                  <p className="text-xs text-text-2">1235 Votes</p>
                </div>
                <div className="w-full flex flex-col items-center gap-y-5">
                  <p className="text-center text-xs text-[#FFC943]">
                    1285 Points & 2 Coins earned
                  </p>
                  <div className="w-full flex flex-col gap-y-3">
                    <VSIcon className="size-8 min-w-8 mx-auto text-text-3" />
                    <div className="flex flex-col gap-y-2">
                      <p className="text-xs text-text-1 text-center">
                        Challenge Date - 14/02/2025
                      </p>
                      <div className="text-center text-[#FFC943]">
                        Rita is the winner!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-y-[10px]">
                  <p className="text-xs text-text-2 whitespace-nowrap">
                    {faker.person.fullName()}
                  </p>
                  <div className="relative">
                    <Img
                      src={faker.image.avatar()}
                      className="size-[60px] min-w-[60px] aspect-square rounded-full border border-[#FFC943] outline-3 outline-[#FFC9431A]"
                    />
                    <CrownIcon className="size-4 absolute top-0 right-0" />
                  </div>
                  <p className="text-xs text-text-2">958 Votes</p>
                </div>
              </Link>
              <Link
                to="challenge-details"
                className="p-4 flex justify-between gap-x-2 bg-bg-2 rounded-2xl"
              >
                <div className="flex flex-col items-center gap-y-[10px]">
                  <p className="text-xs text-text-1">You</p>
                  <div className="relative">
                    <Img
                      src={userData?.user_img}
                      className="size-[60px] min-w-[60px] aspect-square rounded-full border border-[#FFC943] outline-3 outline-[#FFC9431A]"
                    />
                    <CrownIcon className="size-4 absolute top-0 right-0" />
                  </div>
                  <p className="text-xs text-text-3">1235 Votes</p>
                </div>
                <div className="w-full flex flex-col items-center gap-y-5">
                  <p className="text-center text-xs text-[#FFC943]">
                    1285 Points & 2 Coins earned
                  </p>
                  <div className="w-full flex flex-col gap-y-3">
                    <VSIcon className="size-8 min-w-8 mx-auto text-text-3" />
                    <div className="flex flex-col gap-y-2">
                      <p className="text-xs text-text-1 text-center">
                        Challenge Date - 14/02/2025
                      </p>
                      <div className="text-center text-[#FFC943]">
                        You’re the winner!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-y-[10px]">
                  <p className="text-xs text-text-2 whitespace-nowrap">
                    {faker.person.fullName()}
                  </p>
                  <Img
                    src={faker.image.avatar()}
                    className="size-[60px] min-w-[60px] aspect-square rounded-full mix-blend-luminosity"
                  />
                  <p className="text-xs text-text-2">958 Votes</p>
                </div>
              </Link>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
