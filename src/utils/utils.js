import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

export const getMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (error) {
    // console.log(error);
  }
};

export const followHelper = (clickedProfile, profile, following_id) => {
  return profile.id === clickedProfile.id
    ? {
        ...profile,
        num_of_followers: profile.num_of_followers + 1,
        following_id,
      }
    : profile.is_profile_owner
    ? {
        ...profile,
        num_of_following: profile.num_of_following + 1,
      }
    : profile;
};

export const unfollowHelper = (clickedProfile, profile) => {
  return profile.id === clickedProfile.id
    ? {
        ...profile,
        num_of_followers: profile.num_of_followers - 1,
        following_id: null,
      }
    : profile.is_profile_owner
    ? { ...profile, num_of_following: profile.num_of_following - 1 }
    : profile;
};

export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

// export const setTokenTimestamp = (data) => {
//   try {
//     if (!data?.refresh_token) {
//       console.warn("No refresh_token found in response data.");
//       return;
//     }

//     const refreshTokenTimestamp = jwtDecode(data.refresh_token)?.exp;
//     if (refreshTokenTimestamp) {
//       localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
//     }
//   } catch (error) {
//     console.error("Error decoding refresh token:", error);
//   }
// };

export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};
