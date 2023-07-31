import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import fs from "fs";
import path from "path";

const getPath = () => path.join(process.cwd(), "userInfo.json");

// NOTE 현재는 NICE 쪽에서 GET 으로 호출중인데 이후 POST 로 바뀔 위험이 있다.
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { key, iv, enc_data, token_version_id } = req.query;

    if (
      typeof key === "string" &&
      typeof iv === "string" &&
      typeof enc_data === "string" &&
      typeof token_version_id === "string"
    ) {
      const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv);
      let decrypted = decipher.update(enc_data, "base64", "utf-8");
      decrypted += decipher.final("utf-8");

      const filePath = getPath();

      try {
        const data = fs.readFileSync("./userInfo.json", "utf-8");
        const newUserInfo = JSON.parse(data);
        newUserInfo[token_version_id] = JSON.parse(decrypted);
        fs.writeFileSync(filePath, JSON.stringify(newUserInfo));
      } catch (e) {
        const newUserInfo = { [token_version_id]: JSON.parse(decrypted) };
        fs.writeFileSync(filePath, JSON.stringify(newUserInfo));
      }
      res.redirect("/signup/result");
    } else {
      res.redirect("/404");
    }
  }

  if (req.method === "POST") {
    const { token_version_id } = req.query;
    const filePath = getPath();

    if (typeof token_version_id === "string") {
      try {
        const data = fs.readFileSync(filePath, "utf-8");
        const allUserInfo = JSON.parse(data);
        const targetUserInfo = JSON.stringify(allUserInfo[token_version_id]);

        allUserInfo[token_version_id] = undefined;
        // console.log(allUserInfo);
        fs.writeFileSync(filePath, JSON.stringify(allUserInfo));

        res.status(200).json(JSON.parse(targetUserInfo));
      } catch (e) {
        res.status(400).json({
          result: "fail",
          error: e,
        });
      }
    } else {
      res.status(400).json({
        result: "fail",
      });
    }
  }
};

export default handler;
