import type { NextApiRequest, NextApiResponse } from "next";
import { sendRegisterEvent } from "shared-meta";

type ResponseData = {
  eventName: string;
  origin?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === "POST") {
    if (req.body.email && req.headers.origin) {
      sendRegisterEvent({
        email: req.body.email,
        eventSourceUrl: req.headers.origin,
      });

      // eslint-disable-next-line no-underscore-dangle
      return res.status(200).json({ eventName: "register_complete", origin: req.headers.origin });
    }
  }

  return res.status(404).json({ eventName: "error" });
}
