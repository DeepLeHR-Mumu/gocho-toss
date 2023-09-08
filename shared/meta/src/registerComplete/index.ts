import { FacebookAdsApi, ServerEvent, EventRequest, UserData, CustomData } from "facebook-nodejs-business-sdk";

import {
  ACCESS_TOKEN,
  PIXEL_ID,
  // TEST_EVENT_CODE
} from "../constant";
import { RegisterCompleteEventRequestObj } from "./type";

export async function sendRegisterEvent({ eventSourceUrl, email }: RegisterCompleteEventRequestObj) {
  const currentTimestamp = Math.floor(new Date().getTime() / 1000);
  const userData = new UserData().setEmail(email);

  const event = new ServerEvent()
    .setEventTime(currentTimestamp)
    .setUserData(userData)
    .setEventSourceUrl(eventSourceUrl);

  const eventRequest = new EventRequest(ACCESS_TOKEN, PIXEL_ID);
  // if (process.env.NODE_ENV === "development") {
  // eventRequest.setTestEventCode(TEST_EVENT_CODE);
  // }

  try {
    if (ACCESS_TOKEN === undefined || PIXEL_ID === undefined) {
      throw new Error(`"Missing required config. Got PIXEL_ID: '${PIXEL_ID}', ACCESS_TOKEN: '${ACCESS_TOKEN}'"`);
    }
    FacebookAdsApi.init(ACCESS_TOKEN);

    event.setEventName("register_complete");

    eventRequest.setEvents([event]);

    eventRequest.execute();
  } catch (error) {
    const customData = new CustomData().setCustomProperties({ error });

    event.setEventName("register_fail").setCustomData(customData);

    eventRequest.setEvents([event]);

    eventRequest.execute();
  }
}
