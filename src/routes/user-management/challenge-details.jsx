import { CrownIcon, TrashIcon, VSIcon } from "@/assets/icons/user-management";
import Img from "@/components/ui/Img";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DANCER1, DANCER2 } from "@/constants/images";
import DeleteComment from "@/modals/delete-comment";
import { faker } from "@faker-js/faker";
import { useMemo } from "react";
import { useBoolean } from "usehooks-ts";

const ChallengeDetails = () => {
  const deleteComment = useBoolean(false);

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

  const enemyUserData = useMemo(
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

  const commentsData = useMemo(
    () =>
      new Array(20).fill().map(() => ({
        id: faker.database.mongodbObjectId(),
        user_img: faker.image.avatar(),
        fname: faker.person.firstName(),
        lname: faker.person.lastName(),
        message: faker.hacker.phrase(),
        time: `${faker.number.int({ min: 1, max: 59 })} min ago`,
      })),
    []
  );

  return (
    <>
      <div className="h-full flex overflow-hidden">
        <ScrollArea className="pr-3">
          <div className="w-full mb-4 sm:mb-6 lg:mb-[30px] flex relative">
            <div className="w-full relative rounded-l-2xl">
              <div className="absolute w-full h-full rounded-l-2xl z-10 bg-linear-to-b from-0% from-[#00000000] via-65% via-[#00000099] to-100% to-[#000000]" />
              <Img
                className="w-full rounded-l-2xl aspect-[565/380] 2xl:aspect-[500/280] object-cover"
                src={DANCER1}
                alt="dancer1"
              />
              <div className="absolute bottom-5 left-5 w-[calc(100%-40px)] mx-auto flex items-center justify-between z-30">
                <div className="flex items-center gap-x-4">
                  <Img
                    src={userData?.user_img}
                    className="size-[30px] rounded-full"
                    alt={`user-${userData?.id}}`}
                  />
                  <p className="text-text-1 text-base">
                    {userData?.fname} {userData?.lname}
                  </p>
                </div>
                <div className="py-1 px-3 rounded-full text-text-1 bg-text-3 text-sm">
                  00:50
                </div>
              </div>
            </div>
            <div className="p-4 bg-text-1 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <VSIcon className="size-11 min-w-11 text-text-3" />
            </div>
            <div className="w-full relative rounded-r-2xl">
              <div className="absolute w-full h-full rounded-r-2xl z-10 bg-linear-to-b from-0% from-[#00000000] via-65% via-[#00000099] to-100% to-[#000000]" />
              <Img
                className="w-full rounded-r-2xl aspect-[565/380] 2xl:aspect-[500/280] object-cover"
                src={DANCER2}
                alt="dancer2"
              />
              <div className="absolute bottom-5 left-5 w-[calc(100%-40px)] mx-auto flex items-center justify-between z-30">
                <div className="flex items-center gap-x-4">
                  <Img
                    src={enemyUserData?.user_img}
                    className="size-[30px] rounded-full"
                    alt={`user-${enemyUserData?.id}}`}
                  />
                  <p className="text-text-1 text-base">
                    {enemyUserData?.fname} {enemyUserData?.lname}
                  </p>
                </div>
                <div className="py-1 px-3 rounded-full text-text-1 bg-text-3 text-sm">
                  00:50
                </div>
              </div>
            </div>
          </div>
          <div className="h-[672px] flex gap-x-6 overflow-hidden">
            <div className="h-full p-6 pr-3 flex flex-col rounded-2xl flex-[45%] bg-bg-3 overflow-hidden">
              <p className="px-3 text-xl text-text-1 font-bold">
                Challenge Detail
              </p>
              <div className="w-[calc(100%-24px)] mx-auto mt-4 mb-6 border border-dashed border-text-2 opacity-70" />
              <div className="h-full flex overflow-hidden">
                <ScrollArea className="px-3">
                  <div className="space-y-0.5">
                    <p className="text-text-1 text-lg font-semibold">
                      Category
                    </p>
                    <p className="text-text-6 text-lg">Dance</p>
                  </div>
                  <div className="my-5 space-y-0.5">
                    <p className="text-text-1 text-lg font-semibold">
                      Description
                    </p>
                    <p className="text-text-6 text-lg">
                      Get ready to groove with our exciting Dance Challenge!
                      Show off your unique moves, record your performance, and
                      share it with the world. Compete for amazing prizes, gain
                      recognition, and have loads of fun. Whether you're a
                      beginner or a pro, this is your time to shine on the dance
                      floor!
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-text-1 text-lg font-semibold">
                      Participants
                    </p>
                    <div className="p-4 flex justify-between gap-x-2 bg-bg-2 rounded-2xl">
                      <div className="flex flex-col items-center gap-y-[10px]">
                        <p className="text-xs text-text-1">You</p>
                        <div className="relative">
                          <Img
                            src={userData?.user_img}
                            className="size-[60px] min-w-[60px] aspect-square rounded-full border border-[#FFC943] outline-3 outline-[#FFC9431A]"
                            alt={`user-${userData?.id}}`}
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
                          {enemyUserData.fname} {enemyUserData.lname}
                        </p>
                        <Img
                          src={enemyUserData.user_img}
                          className="size-[60px] min-w-[60px] aspect-square rounded-full mix-blend-luminosity"
                          alt={`user-${enemyUserData?.id}}`}
                        />
                        <p className="text-xs text-text-2">958 Votes</p>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
            <div className="h-full p-6 pr-3 flex flex-col rounded-2xl flex-[55%] bg-bg-3 overflow-hidden">
              <p className="px-3 text-xl text-text-1 font-bold">Comments</p>
              <div className="w-[calc(100%-24px)] mx-auto mt-4 mb-6 border border-dashed border-text-2 opacity-70" />
              <div className="h-full flex overflow-hidden">
                <ScrollArea className="w-full px-3">
                  <div className="h-full flex flex-col gap-y-3 overflow-hidden">
                    {commentsData.map((comment) => {
                      return (
                        <div
                          key={comment.id}
                          className="p-4 flex items-center justify-between gap-3 bg-bg-2 rounded-2xl"
                        >
                          <div className="flex gap-x-2 items-center">
                            <Img
                              src={comment.user_img}
                              className="size-[50px] min-w-[50px] aspect-square rounded-full"
                              alt={`user-${comment.id}`}
                            />
                            <div className="space-x-0.5">
                              <p className="text-text-1 text-sm font-medium">
                                {comment.fname} {comment.lname}
                              </p>
                              <p className="text-text-1 text-xs font-light">
                                {comment.message}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <p className="text-text-2 text-xs">
                              {comment.time}
                            </p>
                            <button
                              type="button"
                              className="size-10 flex justify-center items-center rounded-full bg-bg-3 cursor-pointer"
                              onClick={deleteComment.setTrue}
                            >
                              <TrashIcon className="size-5 text-[#FF0000]" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
      <DeleteComment
        state={deleteComment}
        onClose={() => deleteComment.setFalse()}
      />
    </>
  );
};

export default ChallengeDetails;
