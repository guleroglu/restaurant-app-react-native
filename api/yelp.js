import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer mBZLr6-cdpmZvGCDMfJZG9QTvOhnJJsuKg29FS7baFdVmTjlu8f3pYLaxicbhHz_jGkQ6SHu2J2zKepMipn_Kmpr1NMxUuSu1KfA92TXEVLYiA5T1AqdItjN0p4WZnYx",
  },
});
