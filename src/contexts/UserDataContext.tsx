import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserData } from '../interfaces/UserData';

const API_URL =
  'https://gist.githubusercontent.com/kyleva/21ed4c3dcb2d74572c2259cc2b4e04ce/raw/7c1f65a1dfb62ed715b163c6f22c4b8bfeafcbf3/astrik-user-details.json';

export interface UserDataType {
  userData: UserData | null;
  setUserData: (userData: UserData) => void;
}

const userDataDefaultValues = {
  userData: {
    name: '',
    title: '',
    score: 0,
    skills: [],
  },
  setUserData: () => undefined,
};

const UserDataContext = createContext<UserDataType>(userDataDefaultValues);

type UserDataProps = {
  children: React.ReactNode;
};

const UserDataProvider: React.FC<UserDataProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(
    userDataDefaultValues.userData,
  );

  useEffect(() => {
    const getUserData = async () => {
      const userData = await fetch(API_URL);
      const userDataJson: UserData = await userData.json();
      setUserData(userDataJson);
    };

    getUserData();
  }, []);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData: (userData: UserData) => setUserData(userData),
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
export default UserDataProvider;
