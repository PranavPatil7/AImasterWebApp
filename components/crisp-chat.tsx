"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1d75256e-b623-4f1b-b0b6-4e98965e1c9c");
  }, []);

  return null;
};
