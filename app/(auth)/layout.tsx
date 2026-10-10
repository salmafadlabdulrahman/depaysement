import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen bg-white lg:grid-cols-2">
      {children}
      <div className="relative hidden bg-powder/60 lg:m-4 lg:block lg:rounded-card">
        <Image
          src="/chat-shared-trip.png"
          alt="a shared trip in a chat conversation"
          fill
          sizes="(min-width: 1024px) 50vw, 0px"
          className="object-contain p-10 drop-shadow-object"
          priority
        />
      </div>
    </div>
  );
}
