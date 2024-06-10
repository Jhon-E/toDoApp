import { useEffect, useState } from "react";

export const RenderClock = () => {
  const [hour, setHour] = useState();
  const [timeZone, setTimeZone] = useState();

  useEffect(() => {
    const date = new Date().getHours();
    const interval = setInterval(() => {
      setHour(
        new Date().toTimeString().split(" ")[0].split(":").slice(0, 2).join(":")
      );
      setTimeZone(() => (date >= 12 ? "p.m." : "a.m."));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1>
      {hour} {timeZone}
    </h1>
  );
};
