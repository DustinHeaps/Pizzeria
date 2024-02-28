"use client";

import { getUserById } from "@/actions/user";
import UserProfileForm from "@/components/forms/UserProfileForm";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const UserProfilePage = () => {
  const [currentUser, setCurrentUser] = useState<any>();
  const { userId } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      const res = await getUserById(userId as string);
      setCurrentUser(res);
    };

    getUser();
  }, []);

  const updateUser = () => {
    
  } 
  //   const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  //   const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  //   if (isGetLoading) {
  //     return <span>Loading...</span>;
  //   }

  //   if (!currentUser) {
  //     return <span>Unable to load user profile</span>;
  //   }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
