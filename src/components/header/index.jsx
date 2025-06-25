import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useIsMobile } from '@/hooks/use-mobile'
import { Fragment, useMemo } from 'react'
import { useLocation } from 'react-router'
import Profile from './Profile'

const Header = () => {
  const { pathname } = useLocation()
  const isMobile = useIsMobile()

  const getLinks = useMemo(() => {
    const items = pathname.split('/').slice(1)

    const route = items.map((name) => {
      const routeName = decodeURIComponent(name)

      const title = routeName
        .split('-')
        .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
        .join(' ')

      return { title, path: pathname.split('/').slice(1).at(-2) }
    })

    return route
  }, [pathname])

  return (
    <header className="w-full py-4 md:py-5 px-3 sm:px-4 md:px-5 lg:px-[30px] bg-bg-2 flex items-center justify-between">
      <div className="w-full flex items-center gap-x-2">
        {isMobile && (
          <SidebarTrigger
            size={32}
            className="hover:bg-transparent [&_svg]:size-5 [&_svg]:text-text-1"
          />
        )}

        <Breadcrumb className="font-gilroy">
          <BreadcrumbList className="gap-0.5 sm:gap-1.5 lg:gap-2.5">
            {getLinks.map((route, index) => {
              const isLast = getLinks.length - 1 === index;

              if (isLast) {
                return (
                  <BreadcrumbItem
                    key={index}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px]"
                  >
                    <BreadcrumbPage className="font-semibold text-text-1">
                      {route.title}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                );
              }

              return (
                <Fragment key={index}>
                  <BreadcrumbItem className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px]">
                    <BreadcrumbLink
                      to={`/${route.path}`}
                      className="font-semibold"
                    >
                      {route.title}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="[&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 lg:[&>svg]:w-6 lg:[&>svg]:h-6" />
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center justify-end gap-x-3 md:gap-x-4">
        <Profile />
      </div>
    </header>
  );
}

export default Header
