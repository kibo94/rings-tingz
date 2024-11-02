'use client'
import Hero from "./components/Hero";
import ShopByCategory from "./components/ShopByCategory";
import NewIn from "./components/NewIn";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RingsThingsBrand from "./components/RingsThingsBrand";
import NewsLetter from "./components/NewsLetter";
import InstagramFeeds from "./components/InstagramFeeds";

const queryClient = new QueryClient();
export default function Home() {
  return (
    <div className="container m-auto uppercase container m-auto md:p-0 p-3">
      <QueryClientProvider client={queryClient}>
        <Hero />
        <ShopByCategory />
        <NewIn />
        <RingsThingsBrand />
        <NewsLetter />
        <InstagramFeeds />
      </QueryClientProvider>
    </div >
  );
}
