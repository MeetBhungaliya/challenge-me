import { BannedIcon, UserGroupIcon } from "@/assets/icons/dashbord";
import { BadgeIcon, ChallengeManagementIcon } from "@/assets/icons/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import { Fragment } from "react";

const Dashboard = () => {
  const cards = [
    {
      title: "Total Users",
      value: 100,
      icon: <UserGroupIcon className="size-9 text-[#9ACE21]" />,
    },
    {
      title: "Active Challenges",
      value: 75,
      icon: <ChallengeManagementIcon className="size-9 text-[#FB923C]" />,
    },
    {
      title: "Banned Users",
      value: 15,
      icon: <BannedIcon className="size-9 text-[#D15241]" />,
    },
    {
      title: "Total Badges",
      value: 12,
      icon: <BadgeIcon className="size-9 text-[#0EB0EB]" />,
    },
  ];

  return (
    <div className="h-full flex flex-col gap-y-10 overflow-hidden">
      <div className="grid grid-cols-4 gap-x-5">
        {cards.map((data, index) => {
          return (
            <div
              key={index}
              className="p-6 flex flex-col gap-y-4 bg-bg-3 rounded-2xl"
            >
              <div className="size-[60px] ml-auto flex justify-center items-center bg-bg-2 rounded-lg">
                {data.icon}
              </div>
              <div>
                <p className="text-2xl text-text-1 font-bold">{data.value}</p>
                <p className="text-xl text-text-2">{data.title}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-full flex flex-col gap-y-6 overflow-hidden">
        <p className="text-text-1 text-lg md:text-xl">Recent Admin Actions</p>
        <div className="h-full p-6 pr-1 flex rounded-2xl bg-bg-3 overflow-hidden">
          <ScrollArea className="w-full pr-5">
            <div className="w-full flex flex-col">
              {new Array(faker.number.int({ min: 8, max: 30 }))
                .fill()
                .map((_, index, array) => {
                  const action = faker.helpers.arrayElement([0, 1, 2]);
                  const isLast = index === array.length - 1;
                  return (
                    <Fragment key={index}>
                      <div className="flex items-center justify-between gap-x-3">
                        <div className="flex gap-x-3 items-center">
                          <div className="size-[50] min-w-[50px] aspect-square flex items-center justify-center bg-bg-2 rounded-md">
                            <UserGroupIcon className="size-[30px] text-text-1" />
                          </div>
                          <div>
                            <p className="text-text-1">
                              Challenge 'Summer Fitness' was deleted by Admin
                            </p>
                            <p className="text-text-2">2 hours</p>
                          </div>
                        </div>
                        <p
                          className={cn(
                            action === 0
                              ? "text-[#FF0000]"
                              : action === 1
                                ? "text-[#FB923C]"
                                : "text-[#1566DF]"
                          )}
                        >
                          {action === 0
                            ? "Deletion"
                            : action === 1
                              ? "Suspended"
                              : "Admin"}
                        </p>
                      </div>
                      {!isLast && (
                        <Separator className="my-5 bg-text-2 opacity-50" />
                      )}
                    </Fragment>
                  );
                })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
