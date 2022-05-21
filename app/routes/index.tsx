import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function Index() {
  const [year, setYear] = useState();
  const [id, setId] = useState();
  const [color, setColor] = useState();

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
  console.log("trollyData.data :", trollyData.data?.data); ////eslint disable line ##DEBUG
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div>raw: {JSON.stringify(trollyData.data?.data)}</div>
      <div>id: {trollyData.data?.data.id}</div>
      <div>name: {trollyData.data?.data.name}</div>
      <div>year: {trollyData.data?.data.year}</div>
    </div>
  );
}
