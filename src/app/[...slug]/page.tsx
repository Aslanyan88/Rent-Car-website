// app/[...slug]/page.tsx
import { redirect } from 'next/navigation';
type tParams = Promise<{ slug: string[] }>;

// interface PageParams {
//   slug: string[];
// }

// interface PageProps {
//   params: PageParams; // Ensure params is just PageParams
// }

export default async function OptionalCatchAllRoute(props:{ params : tParams}) {
  const { slug } = await props.params;

  // Handle empty or invalid slug
  if (!slug || !Array.isArray(slug) || slug.length === 0) {
    redirect('/');
    return; // Ensure you return after redirect
  }

  // Redirect all other undefined routes to home
  redirect('/');
}
