interface TCenteredTitle {
  title: string;
  subTitle: string;
}

export default function CenteredTitle({ title, subTitle }: TCenteredTitle) {
  return (
    <div className="mx-auto max-w-2xl p-4 mt-8 text-center">
      <a href="#">
        <h1 className=" font-bold tracking-tight text-5xl text-black relative p-4">
          {title}
        </h1>
      </a>
      <p className="mb-3 mt-4 text-lg text-gray-500 ">{subTitle}</p>
    </div>
  );
}
