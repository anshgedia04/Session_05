import UserList from "@/components/UserList";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto py-8">
        <UserList />
      </div>
    </main>
  );
}
