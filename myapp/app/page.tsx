import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <p>some content</p>
      <div className="grid grid-cols-3">
        <div className="p-5 border">1</div>
        <div className="p-5 border">1</div>
        <div className="p-5 border">1</div>
        <div className="p-5 border">1</div>
        <div className="p-5 border">1</div>
        <div className="p-5 border">1</div>
        <div className="p-5 border">1</div>
        <div className="p-5 border">1</div>
        <div className="p-5 border">1</div>
      </div>

    </div>
  );
}
