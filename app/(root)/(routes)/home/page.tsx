import prismadb from "@/lib/prismadb";
import { Categories } from "@/components/categories";
import { Companions } from "@/components/companions";
import { SearchInput } from "@/components/search-input";
import LandingPage from "@/components/landing-page";
import Footer from "@/components/footer";

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}

const RootPage = async ({ searchParams }: RootPageProps) => {
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          messages: true,
        },
      },
    },
  });

  const categories = await prismadb.category.findMany();

  return (
    <div className="h-full p-4 space-y-2">
      {/* <LandingPage /> */}
      <div id="explore">
        <SearchInput />
      </div>
      <div className="mb-auto">
        <Categories data={categories} />
        <Companions data={data} />
      </div>

      <div className="sticky top-[100vh]">
        <Footer />
      </div>
    </div>
  );
};

export default RootPage;
