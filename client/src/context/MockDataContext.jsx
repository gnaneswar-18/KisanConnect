import { createContext, useContext } from "react";
// import { fruits, proPhoto } from "../assets/assets";

const MockContext = createContext();
export const useMock = () => useContext(MockContext);

export const MockDataProvider = ({ children }) => {
  const mockFeedPosts = [/* ... */];
  const mockPublicProfile = [/* ... */];
  const mockPublicPosts = [/* ... */];
  const mockReviews = [/* ... */];

  return (
    <MockContext.Provider value={{ mockFeedPosts, mockPublicProfile, mockPublicPosts, mockReviews }}>
      {children}
    </MockContext.Provider>
  );
};
