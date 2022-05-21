import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";

export default function Index() {
  
  const trollyData = useFetcher();

  useEffect(() => {
    if (trollyData.type === "init") {
      trollyData.load("/trollyUpdate/");
    }
  }, [trollyData]);

  useEffect(() => {
    setInterval(async () => {
      console.log("interval Fired");
      trollyData.load("/trollyUpdate/");
    }, 3000);
  }, []);
  console.log("trollyData.data :", trollyData.data); ////eslint disable line ##DEBUG
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    ></div>
  );
}
