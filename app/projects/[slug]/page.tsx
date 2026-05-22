import { redirect } from "next/navigation";
import { workSeries } from "../../work-series-data";

export function generateStaticParams() {
  return workSeries.map((series) => ({
    slug: series.slug,
  }));
}

export default function LegacyProjectSeriesPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const matchedSeries = workSeries.find(
    (series) => series.slug === params.slug
  );

  if (matchedSeries) {
    redirect(`/works/${matchedSeries.slug}`);
  }

  redirect("/projects/botanical-portraits");
}
