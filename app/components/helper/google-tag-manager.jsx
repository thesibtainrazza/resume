"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect, useState } from "react";

const ClientGoogleTagManager = ({ gtmId }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !gtmId) return null;

  return <GoogleTagManager gtmId={gtmId} />;
};

export default ClientGoogleTagManager;
