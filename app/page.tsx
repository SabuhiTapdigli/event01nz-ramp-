import Wrapper from "@/components/Wrapper/Wrapper";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home(props: Props) {
  const searchParams = props.searchParams;

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Wrapper searchParams={searchParams} /> */}
    </div>
  );
}
