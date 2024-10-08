import SlowComponent from "@/components/SlowComponent";
import Throbber from "@/components/Throbber";
import { Suspense } from "react";

export default function SlowPage() {
  return (
    <div>
      <p>This page is going to load everything besides the slow part</p>
      <Suspense fallback={<Throbber />}>
        <SlowComponent />
      </Suspense>
      <p>This content will shift when the above loads</p>
    </div>
  );
}
