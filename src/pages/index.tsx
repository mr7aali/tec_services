import { Button } from "antd";

export default function Home() {
  return (
    <>
      <div className="flex">
        <h2 className="mx-auto text-blue-50 text-2xl p-5 bg-red-950">
          This is my home page
        </h2>
      </div>
      <Button type="primary">Button</Button>
    </>
  );
}
