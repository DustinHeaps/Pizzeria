import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
//   const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-orange-500' />
      </SheetTrigger>
      <SheetContent className='space-y-3'>
        <SheetTitle>
          {/* {isAuthenticated ? (
            <span className='flex items-center font-bold gap-2'>
              <CircleUserRound className='text-orange-500' />
              {user?.email}
            </span>
          ) : ( */}
            <span> Welcome to Pizza.com!</span>
          {/* )} */}
        </SheetTitle>
        <Separator />
        <SheetDescription className='flex flex-col gap-4'>
          {/* {isAuthenticated ? (
            <MobileNavLinks />
          ) : ( */}
            <Button
            //   onClick={() => loginWithRedirect()}
              className='flex-1 font-bold bg-orange-500'
            >
              Log In
            </Button>
          {/* )} */}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
