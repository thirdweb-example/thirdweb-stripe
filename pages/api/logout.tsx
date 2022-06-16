import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400).json({ 
      error: "Invalid method. Only POST supported." 
    });
  }

  // Set the access token to 'none' and expire in 5 seconds
  res.setHeader("Set-Cookie", serialize("access_token", 'none', {
    expires: new Date(Date.now() + 5 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  }));

  res.status(200).json("Successfully logged out.");
};

export default logout;
