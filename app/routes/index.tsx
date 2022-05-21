import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function Index() {
  const [fetchCount, setFetchCount] = useState(0);

  const trollyData = useFetcher();

  useEffect(() => {
    if (trollyData.type === "init") {
      trollyData.load("/trollyUpdate/");
      setFetchCount(fetchCount + 1)
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
    >
      Fetches: {fetchCount}

      raw: {
        JSON.stringify(trollyData.data)
      }
      id: {trollyData.data.data.id}
      name: {trollyData.data.data.name}
      year: {trollyData.data.data.years}

    </div>
  );
}
